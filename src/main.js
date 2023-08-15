import "@/mock/index"
import Vue from 'vue'
import App from './App.vue'
import "@/styles/global.less"
import router from './router'
import showMessage from "@/utils/showMessage";
import "./eventBus";
Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vLoading from "@/directives/loading";
import vLazy from "@/directives/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



// Vue.config.productionTip = false

// 测试 showMessage
// import showMessage from "@/utils/showMessage";
// window.showMessage = showMessage;
// showMessage("提交成功", "info", 2000);

// import "@/api/banner";



// 测试：获取远程数据（博客）
// import * as blogApi from "@/api/blog";

// blogApi.getBlogTypes().then((r) => {
//   console.log("博客分类", r);
// });

// blogApi.getBlogs(2, 10, 3).then((r) => {
//   console.log("博客", r);
// });


// 测试事件总线
// import eventBus from "./eventBus";

// function handler1(data) {
//   console.log("handler1", data);
// }
// function handler2(data) {
//   console.log("handler2", data);
// }
// eventBus.$on("event1", handler1);
// eventBus.$on("event1", handler2);
// eventBus.$on("event2", handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;