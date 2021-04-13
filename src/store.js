import Vue from 'vue';
import Vuex from 'vuex';
//import axios from 'axios';
//import router from './router.js';


Vue.use(Vuex);


export default new Vuex.Store({
  state: {
      items: [
          {name: 'computer', price: '208', order: 1},
          {name: 'iphone', price: '500', order: 2},
          {name: 'android', price: '400', order: 3},

      ],
      cart: [],
  },
  getters: {
      getItems: (state) => {
          return state.items;
      },
      getCart: (state) => {
          return state.cart;
      }


  },
  mutations: {
      MOVE_TO_CART: function(state, item){
          const inCartAlready = state.cart.find(e => e.name === item.name);
          if(!inCartAlready){
              state.cart.push(item);
              state.items = state.items.filter(e => e.name !== item.name)
          }
      },
      REMOVE_FROM_CART: function(state, item) {
          state.cart = state.cart.filter(e => e.name !== item.name);
          state.items.push(item);
          state.items.sort((a, b) => a.order - b.order);
      }



  },
  actions: {

      moveToCart: function(context, item){
          context.commit('MOVE_TO_CART',item);
      },
      removeFromCart: function(context, item){
          context.commit('REMOVE_FROM_CART', item);
      }
  },


});

