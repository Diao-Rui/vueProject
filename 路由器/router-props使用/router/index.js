//导入vue-router
import VueRouter from "vue-router";
//导入组件
import About from "../pages/about.vue";
import Home from "../pages/home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from "../components/detail.vue";
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
          children: [
            {
              // params传参必须路径必须带参数
              name: "detail",
              path: "detail/:id/:title",
              component: Detail,
              //第一种写法，对象写法，数据定死
              // props: { id: 123, title: "123" },
              //第二中写法，将params中的参数全部传过去
              // props: true,
              //第三种写法传函数返回值
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});
