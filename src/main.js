// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import './common/stylus/index.less'
 

// 关闭vue 生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)

// 将vueResource 挂载到全局组件上面
Vue.use(VueResource)
// 配置请求服务的URL地址
// Vue.http.options.root = ''



// 挂载到页面上
new Vue({
  
  render: r => r(App),
  router: router
}).$mount('#app')
