//导入vue-router
import VueRouter from "vue-router";
//导入组件
import About from "../pages/about.vue";
import Home from "../pages/home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
//创建实例并导出
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      // 一级路由需要添加/
      path: "/home",
      component: Home,
      children: [
        {
          // 二级路由不用添加/
          path: "news",
          component: News,
        },
        {
          // 二级路由不用添加/
          path: "message",
          component: Message,
        },
      ],
    },
  ],
});
