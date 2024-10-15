import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

//globally filter created
Vue.filter('snippet',value =>{
  if(!value || typeof(value) != 'string') return ''
  value = value.slice(0,40)
  return value
})


new Vue({
  render: h => h(App)
}).$mount('#app')
