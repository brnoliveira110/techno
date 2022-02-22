import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import Loading from './components/Loading.vue'

Vue.component("Header", Header);
Vue.component("Loading", Loading);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
