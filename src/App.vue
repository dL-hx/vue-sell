<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <!-- I am content -->
      <!-- 路由外链 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { async } from 'q'
import Header from './components/header/header.vue'

const ERR_OK = 0

export default {
  name: 'App',
  components: {
    'v-header': Header
  },
  data() {
    return {
      seller: {}
    }
  },

  // 在created 方法中调用接口
  created() {
    this.$http.get('/api/seller').then(async (res) => {
      // console.log(res);
      res = await res.json()
      if (res.errno == ERR_OK) {

        this.seller = res.data
        console.log(this.seller);
      }
    })
  },

}
</script>

<style scoped lang="less">
@import './common/stylus/mixins.less';

.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  // border-bottom: 1px solid rgba(7,17,27,0.1);
  .border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    flex: 1;
    text-align: center;

    &>a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        // a 标签 active 时候的样式
        color: red;

      }
    }
  }
}
</style>
