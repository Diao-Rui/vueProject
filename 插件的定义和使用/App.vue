<template>
    <div>
        <!-- 不用：默认为传递为字符串，使用v-bind:绑定传递为js表达式 -->
        <hello></hello>
        <hr>
        <!-- 使用混入的方法 -->
        <button @click="show">点我调用混入</button>
        <hr>
        <!-- 使用全局混入的数据 -->
        <h1>{{ msg }}</h1>
        <ul>
            <!-- 应用全局过滤器 -->
            <li>name:{{ name | upper(name) }}</li>
            <li>age:{{ age }}</li>
            <li>sex:{{ sex }}</li>
        </ul>
    </div>
</template>

<script>
import Hello from './components/hello.vue'
export default {
    name: 'App',
    components: {
        Hello
    },
    data() {
        return {
            msg: '父组件使用全局混入数据'
        }
    },
}
</script>