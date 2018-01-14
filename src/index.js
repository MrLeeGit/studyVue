import Vue from 'vue';
import Layout from './components/layout';
import VueRouter from 'vue-router';
import IndexPage from './pages/index';
import vueResource from 'vue-resource';
import DetailPage from './pages/detail';
import DetailAnaPage from './pages/detail/analysis';
import DetailCouPage from './pages/detail/count';
import DetailForPage from './pages/detail/forecast';
import DetailPubPage from './pages/detail/publish';
import OrderListPage from './pages/orderList'

Vue.use(VueRouter);
Vue.use(vueResource);

let router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '/',
      component : IndexPage
    },
    {
      path : '/orderList',
      component : OrderListPage
    },
    {
      path : '/detail',
      component : DetailPage,
      children: [
        {
          path : 'analysis',
          component : DetailAnaPage
        },
        {
          path : 'count',
          component : DetailCouPage
        },
        {
          path : 'forecast',
          component : DetailForPage
        },
        {
          path : 'publish',
          component : DetailPubPage
        }
      ]
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render:function(h){
    return h(Layout);
  },
})


