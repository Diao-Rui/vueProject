// 导入vue
import Vue from "vue";
// 导入APP组件
import App from "./App.vue";
//导入vue-router
import VueRouter from "vue-router";
//导入路由器
import router from "./router";
// 关闭生产提示
Vue.config.productionTip = false;

//应用vue-router
Vue.use(VueRouter);
// 创建vue实例对象
new Vue({
  el: "#app",
  render: (h) => h(App),
  router:router
});
