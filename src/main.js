import "@/mock/index"
import Vue from 'vue'
import App from './App.vue'
import "@/styles/global.less"
import router from './router'

// Vue.config.productionTip = false

// 测试 showMessage
// import showMessage from "@/utils/showMessage";
// window.showMessage = showMessage;
// showMessage("提交成功", "info", 2000);

import "@/api/banner";

import showMessage from "@/utils/showMessage";
Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
