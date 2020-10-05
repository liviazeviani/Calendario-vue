import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import VueTextareaAutosize from 'vue-textarea-autosize';

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0Z8tZ0l6rEA1phfJ0nlLZx7BYnLyCoU8",
  authDomain: "vue-calendario-b7576.firebaseapp.com",
  databaseURL: "https://vue-calendario-b7576.firebaseio.com",
  projectId: "vue-calendario-b7576",
  storageBucket: "vue-calendario-b7576.appspot.com",
  messagingSenderId: "303818409495",
  appId: "1:303818409495:web:f0541b267219cf260ffe52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
