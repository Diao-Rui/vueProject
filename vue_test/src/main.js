// 导入vue
import Vue from "vue";
// 导入APP组件
import App from "./App.vue";

// 关闭生产提示
Vue.config.productionTip = false;

// 创建vue实例对象
new Vue({
  el: "#app",
  render: (h) => h(App),
});
