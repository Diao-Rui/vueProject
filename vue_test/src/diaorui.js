// 定义插件
export default {
  // 插件必须要有的函数参数为Vue原型对象构造函数
  install(Vue) {
    console.log(Vue);

    // 添加全局过滤器
    Vue.filter("upper", function (data) {
      // 小写转大写
      return data.toUpperCase();
    });

    // 定义全局混入
    Vue.mixin({
      data() {
        return {
          name: "zhan san",
          age: 18,
          sex: "girl",
        };
      },
      methods: {
        show() {
          alert("混入被调用");
        },
      },
    });
  },
};
