<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 使用子组件 -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// 导入组件
import HelloWorld from './components/HelloWorld.vue'
// 导出组件
export default {
  // 定义组件名称
  name: 'App',
  // 添加子组件
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
