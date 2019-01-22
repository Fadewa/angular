// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Cookies from 'js-cookie';

import App from './App';
import router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.scss';
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true;
//devtools可以通过开发环境配置
Vue.config.devtools = process.env.NODE_ENV != 'production';

Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用

  console.log("@",err);
  console.log("@@",vm);
  console.log("@@@",info);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  render: h => h(App)
})
