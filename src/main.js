import Vue from 'vue'
import App from './App.vue'
import vueresource from 'vue-resource'

Vue.use(vueresource)
//Vue.http.options.xhr = { headers: { 'Access-Control-Allow-Origin':"https://menus.epfl.ch"}}
//Vue.http.headers['Access-Control-Allow-Origin'] = 'https://menus.epfl.ch'
new Vue({
  el: '#app',
  render: h => h(App)
})
