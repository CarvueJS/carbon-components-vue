// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import CaLoading from '../components/CaLoading';
import CaButton from '../components/CaButton';

require('carbon-components/css/carbon-components.css');

Vue.config.productionTip = false;

Vue.use(CaLoading);
Vue.use(CaButton);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
