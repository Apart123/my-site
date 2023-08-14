// 手写事件总线
const listeners = {};

// 事件总线
// export default {
//   // 监听事件
//   $on(eventName, handler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set();
//     }
//     listeners[eventName].add(handler);
//   },
//   // 取消监听
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   // 触发事件
//   $emit(eventName, ...args) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...args);
//     }
//   },
// };


// vue 实例中本身提供 $on $off $emit 这三个函数
// 返回实例本身
import Vue from "vue";
export default new Vue({});



// import Vue from "vue";

// /*
//  * 事件名：mainScroll
//  * 含义：主区域滚动条位置变化后触发
//  * 参数：
//  * - 滚动的dom元素
//  */
// Vue.prototype.$bus = new Vue({});