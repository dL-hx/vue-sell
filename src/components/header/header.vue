<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand">

          </span>
          <span class="name">{{ seller.name }}</span>
        </div>

        <div class="description">
          {{ seller.description }} / {{ seller.deliveryTime }}分钟送达
        </div>

        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>

        <!-- 增加按钮,v-if 作用, 如果没有这个值, 则不展示这个DOM -->
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>


    </div>

    <div class="bulletion-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>

    <transition name="fade">
      <div v-show="detailShow" class="detail" transition="">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{ seller.name }}</h1>
            <!-- 定义wrapper, 包装组件 -->
            <div class="star-wrapper">
              <v-star :size="48" :score="seller.score" />
            </div>

            <div class="title-wrapper">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>

            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item, index)  in seller.supports" :key="index">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{ item.description }}</span>
              </li>
            </ul>


            <div class="title-wrapper">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>

            <div class="bulletin">
              <!-- 大段文字, p -->
              <p class="content">{{ seller.bulletin }}</p>
            </div>


          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>



  </div>
</template> 

<script>
import Star from './../star/star.vue'



export default {
  props: {
    seller: {
      type: Object
    }
  },

  components: {
    'v-star': Star
  },


  data() {
    return {
      detailShow: false // 默认是不展示
    }
  },
  created() {// 转换为对应的样式
    // 映射为Map
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']

  },

  methods: {
    // 展示弹窗
    showDetail() {
      this.detailShow = true
    },

    // 隐藏弹窗
    hideDetail() {
      this.detailShow = false
    }
  }

}
</script>

<style scoped lang="less">
// 引入less 混入
@import '../../common/stylus/mixins.less';

.header {
  position: relative;
  color: #fff;
  background-color: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;

    .avatar {
      display: inline-block;
      vertical-align: top;

      img {
        border-radius: 2px;
      }
    }

    .content {
      display: inline-block;
      margin-left: 16px;
      font-size: 14px;

      .title {
        margin: 2px 0 8px 0;

        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          // 调用mixin
          .bg-image('brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: 600;

        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;

      }

      .support {
        .icon {
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;

          &.decrease {
            .bg-image('decrease_1');
          }

          &.discount {
            .bg-image('discount_1');

          }

          &.guarantee {
            .bg-image('guarantee_1');
          }

          &.invoice {
            .bg-image('invoice_1');
          }

          &.special {
            .bg-image('special_1');
          }
        }
      }
    }

    .support-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      border-radius: 14px;
      background: rgba(0, 0, 0, 0.2);

      .count {
        text-align: center;
        font-size: 10px;
        vertical-align: top;
      }

      .keyboard_arrow_right {
        font-size: 10px;
        line-height: 24px;
        margin-left: 2px;
      }
    }
  }


  .bulletion-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    /* 多余文字隐藏 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);

    .bulletin-title {
      display: inline-block;
      vertical-align: top;
      margin-top: 8px;
      width: 22px;
      height: 12px;
      .bg-image('bulletin');
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }

    .bulletin-text {
      text-align: top;
      margin: 0 4px;
      font-size: 10px;
    }

    .icon-keyboard_arrow_right {
      position: absolute;
      font-size: 10px;
      right: 12px;
      top: 8px;
    }
  }



  .detail {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    /* 不能用hidden 因为如果一旦超过的部分就会被隐藏了 */
    background: rgba(7, 17, 27, 0.8);

    // 设置模糊属性, 实现渐进增强效果, ios设备支持
    backdrop-filter: blur(10px);
    // 设置top, left
    top: 0;
    left: 0;




    transition: all 0.5s;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);


    .detail-wrapper {
      width: 100%;
      margin-top: 64px;
      padding-bottom: 64px;

      .name {
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
      }

      .star-wrapper {
        text-align: center;
        /*水平居中*/
        padding: 2px 0;
        margin-top: 18px;
      }

      .title-wrapper {
        display: flex;
        /*1. 设置宽度*/
        width: 80%;
        margin: 28px auto 24px auto;

        .line {
          flex: 1;
          /*2. 设置自适应,所占空间大小,配合父级flex*/
          /*3.向上偏移-6px, 结合relative*/
          position: relative;
          top: -6px;
          /*4.设置细线粗细,  border-bottom*/
          border-bottom: 1px solid rgba(255, 255, 255, .2);

        }

        .text {
          /*4.设置文本,fz, fw*/
          padding: 0 12px;
          font-size: 14px;
          font-weight: 700;
          /*文案加粗 */
        }
      }


      .supports {
        // 1. 水平居中
        width: 80%;
        margin: 0 auto;

        .support-item {
          padding: 0 12px;
          margin-bottom: 12px;
          font-size: 0;

          &:last-child {
            /*2. 最后一个盒子距离*/
            margin-bottom: 0;
          }

          .icon {
            /*3. 设置icon图片大小*/

            /*3.1. 设置盒子的大小*/
            display: inline-block;
            width: 16px;
            height: 16px;
            vertical-align: top;

            margin-right: 6px;
            /*3.2 */
            background-size: 16px 16px;
            background-repeat: no-repeat;

            &.decrease {
              .bg-image('decrease_2');
            }

            &.discount {
              .bg-image('discount_2');

            }

            &.guarantee {
              .bg-image('guarantee_2');
            }

            &.invoice {
              .bg-image('invoice_2');
            }

            &.special {
              .bg-image('special_2');
            }

          }

          .text {
            line-height: 12px;
            font-size: 12px;
          }
        }
      }


      .bulletin {
        width: 80%;
        margin: 0 auto;

        .content {
          padding: 0 12px;
          line-height: 24px;
          font-size: 12px;
        }
      }



    }
  }


  .fade-enter-active {
    transition: all .5s;
  }

  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    background-color: rgba(7, 17, 27, 0.8);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    background-color: rgba(7, 17, 27, 0);
  }


  .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -48px auto 0 auto;
    clear: both;
    font-size: 32px;
  }
}
</style>
