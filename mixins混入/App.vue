<template>
    <div>
        <!-- 不用：默认为传递为字符串，使用v-bind:绑定传递为js表达式 -->
        <hello></hello>
        <hr>
        <!-- 使用混入的方法 -->
        <button @click="show">点我调用混入</button>
    </div>
</template>

<script>
import Hello from './components/hello.vue'
// 导入混入的模块
import { mixin } from './mixin';
export default {
    name: 'App',
    components: {
        Hello
    },
    // 注册混入
    mixins: [mixin]
}
</script>