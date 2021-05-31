import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import the plugin
import DateRangePicker from "@gravitano/vue-date-range-picker";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../node_modules/bootstrap-vue/src/index';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// use the plugin
Vue.use(DateRangePicker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
