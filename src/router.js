import Vue from 'vue'
import Router from 'vue-router';
import UsingStore from './components/usingstore.vue';
import Testing from './components/testing.vue';
import FormInputs2 from './components/testingFormInputs2.vue';





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
    {
      path: '/testing2',
      name: 'testing2',
      component: FormInputs2
    },

  ]
})
