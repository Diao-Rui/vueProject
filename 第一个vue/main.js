// 导入vue
import Vue from "vue";
// 导入App.vue
import App from "./App.vue";
// 关闭生产提示
Vue.config.productionTip = false;
// 创建vue实例对象
// 渲染APP组件
// 挂载vm到容器上
new Vue({
  render: (h) => h(App),
}).$mount("#app");
