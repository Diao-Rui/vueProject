// 定义一个mixin混入
export const mixin = {
  data() {
    return {
      name: "zhansan",
      age: 18,
      sex: "girl",
    };
  },
  methods: {
    show() {
      alert("混入被调用");
    },
  },
};
