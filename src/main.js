import Vue from 'vue';
import VueRouter from 'vue-router';
import VueJquery from 'vue-jquery'
import App from './components/App.vue';
import store from './store';
import routes from './route'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate';

Vue.use(BootstrapVue)
Vue.use(VueRouter);
Vue.use(VueJquery);

Vue.use(VeeValidate, {
  inject: true,
  errorBagName: 'pageErrors',
  events: 'change|blur',
  classes: true,
  classNames: {
    valid: 'v-is-valid',
    invalid: 'v-is-invalid'
  }
});


Vue.config.productionTip = false;

const router = new VueRouter({
  base:"/VueDemo/",
  mode: 'history',
  routes
});

import { mapActions } from "vuex";

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  methods: {
    ...mapActions(["getProductData"])
  },
  created() {
    this.getProductData();
  }
});