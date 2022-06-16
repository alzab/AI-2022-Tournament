import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import bFormSlider from 'vue-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(bFormSlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
