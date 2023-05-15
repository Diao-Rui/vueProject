//导入vue-router
import VueRouter from "vue-router";
//导入组件
import About from "../pages/about.vue";
import Home from "../pages/home.vue";
//创建实例并导出
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
});
