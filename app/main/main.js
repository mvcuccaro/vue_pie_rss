import axios from 'axios'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

let Parser = require('rss-parser');
let rss = new Parser();

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.rss = Vue.prototype.$rss = rss;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
