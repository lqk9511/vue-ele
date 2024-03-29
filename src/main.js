// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
// Vue.prototype.$axios = axios
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
// 引入的css样式
import 'common/less/index.less';

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
