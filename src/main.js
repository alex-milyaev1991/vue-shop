import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import VueFirestore from 'vue-firestore';

Vue.use(VueFirestore);

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCq2ra-nYfSnbF63LkXGUm8G4ohT2Erlck',
  authDomain: 'vue-test-shop.firebaseapp.com',
  databaseURL: 'https://vue-test-shop.firebaseio.com',
  projectId: 'vue-test-shop',
  storageBucket: '',
  messagingSenderId: '579281804672',
  appId: '1:579281804672:web:856e70debae0074e8f3565'
});

export const db = firebaseApp.firestore();


new Vue({
  router,
  store,
  vuetify, 
  render: h => h(App)
}).$mount('#app')
