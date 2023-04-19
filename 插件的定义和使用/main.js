// 导入vue
import Vue from "vue";

// 导入APP组件
import App from "./App.vue";

// 导入插件
import diaorui from "./diaorui";

// 关闭生产提示
Vue.config.productionTip = false;

// 注册插件（全局注册，所有组件都可以使用）
Vue.use(diaorui);

// 创建vue实例对象
new Vue({
  el: "#app",
  render: (h) => h(App),
});
