import Vue from 'vue'
import Router from 'vue-router';
import UsingStore from './components/usingstore.vue';
import Testing from './components/testing.vue';





Vue.use(Router);



export default new Router({
  routes: [

    {
      path: '/usingstore',
      name: 'usingstore',
      component: UsingStore
    },
    {
        path: '/testing',
        name: 'testing',
        component: Testing
    },

  ]
})
