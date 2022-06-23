<template>
  <!-- 定义基础默认的样式,   :class= 定义动态附加样式 -->
  <div class="star" :class="startType">
    <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  props: {
    // 1.定义外部传递来的属性
    size: { // 尺寸
      type: Number
    },
    score: {// 展示得分
      type: Number
    }

  },
  data() {
    return {
      detailShow: false // 默认是不展示
    }
  },
  computed: {
    startType() {// 依赖于 size 属性
      return 'star-' + this.size
    },

    // 3. 利用计算属性,  计算星星个数
    itemClasses(){
      let result = [] // 构造出 ['on','on','on','half', 'off']这样的数组
      // Math.floor(3.6 *2) /2 =3.5
      // Math.floor(4 *2) /2 =4
      // 向下取0.5倍数
      let score = Math.floor(this.score *2) /2
      let hasDecimal = score % 1 !==0 // 是否有小数
      let integer = Math.floor(score) // 是否有整数

      // 1. 构造全星
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }

      // 2. 添加半星
      if (hasDecimal) {
        result.push(CLS_HALF)
      }

      // 3. 补齐空星
      while(result.length < LENGTH){
        result.push(CLS_OFF)
      }

      return result
    }
  }
};
</script>

<style lang="less" scoped>
// mixin 混入
// @import "../../common/stylus/mixins.less";


.bg-image-base(@url: '') {
  @2xImgUrl: "@2x.png";
  // call mixin .c-icon();
  background-image: url("@{url}@{2xImgUrl}");
}

;


@media (-webkit-min-device-pixel-ratio: 2),
(min-device-pixel-ratio: 2) {
  .bg-image-base(@url: '') {
    @3xImgUrl: "@3x.png";
    // call mixin .c-icon();
    background-image: url("@{url}@{3xImgUrl}");
  }
}



// .bg-image('star24_half','')

// .on 全星
// .half 半星
// .off 0星

// 2. 定义css样式
.star {
  font-size: 0;

  .star-item {
    // 横向排布
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {

    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      // 设置最后一个元素没有 右侧间距
      &:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image-base('star48_on')
      }

      &.half {
        .bg-image-base('star48_half')
      }

      &.off {
        .bg-image-base('star48_off')
      }
    }
  }




   &.star-36 {

    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      // 设置最后一个元素没有 右侧间距
      &:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image-base('star36_on')
      }

      &.half {
        .bg-image-base('star36_half')
      }

      &.off {
        .bg-image-base('star36_off')
      }
    }
  }



  
 &.star-24 {

    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      // 设置最后一个元素没有 右侧间距
      &:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image-base('star24_on')
      }

      &.half {
        .bg-image-base('star24_half')
      }

      &.off {
        .bg-image-base('star24_off')
      }
    }
  }



}
</style>