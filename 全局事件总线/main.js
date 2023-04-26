// 导入vue
import Vue from "vue";
// 导入APP组件
import App from "./App.vue";

// 关闭生产提示
Vue.config.productionTip = false;

// 第一种实现方案
// 获取VueComponent原型对象
const Demo = Vue.extend({});
// 创建VueComponent实例对象
const bus = new Demo();
// 安装全局事件总线
Vue.prototype.$bus = bus;

// 创建vue实例对象
new Vue({
  el: "#app",
  render: (h) => h(App),
});
