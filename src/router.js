
import VueRouter from 'vue-router'

import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
 

const routes = [
    { path: '/', redirect: '/goods' },
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller }
];



const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
    linkActiveClass:'active' // 被激活的样式为active样式
})


export default router