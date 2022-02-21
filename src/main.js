import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'

Vue.component("Header", Header);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
