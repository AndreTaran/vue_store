import Vue from 'vue'
import App from './App'
import BuyDialogComponent from '@/components/Common/BuyDialog'
import store from './Store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import * as fb from 'firebase/app'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  vuetify,
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyD89ZOHXDO3ctFVoNjXMjxTqo0TorSFGZ4',
      authDomain: 'onlinestore-6e112.firebaseapp.com',
      databaseURL: 'https://onlinestore-6e112.firebaseio.com',
      projectId: 'onlinestore-6e112',
      storageBucket: 'onlinestore-6e112.appspot.com',
      messagingSenderId: '330930272348',
      appId: '1:330930272348:web:157a027c23d5099a764e99'
    }
    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchProducts')
  }
}).$mount('#app')
