// 该文件用于创建Vuex最为核心的store

//引入vue
import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 使用Vuex插件
Vue.use(Vuex);
// 准备actions（用于响应组件中的动作）
// 有业务逻辑处理的在这里处理
// 名称建议小写
const actions = {
  // 参数1为mini版store
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500);
  },
};

// 准备mutations（用于操作数据）
// 名称建议大写
const mutations = {
  // 函数全称写法
  ADD: function (state, value) {
    console.log("mutations被调用了", state, value);
    state.sum += value;
  },
  SUB(state, value) {
    state.sum -= value;
  },
  ADD_PERSON(state, value) {
    state.personList.push(value);
  },
};

// 准备state（用于存储数据）
const state = {
  sum: 0,
  personList: [],
};
// 准备getters
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
