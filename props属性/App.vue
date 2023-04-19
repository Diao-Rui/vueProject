<template>
    <div>
        <!-- 不用：默认为传递为字符串，使用v-bind:绑定传递为js表达式 -->
        <hello name="zhangsan" sex="男" :age="18"></hello>
        <hr>
        <hello name="lishi" sex="女" :age="18"></hello>
    </div>
</template>

<script>
import Hello from './components/hello.vue'
export default {
    name: 'App',
    components: {
        Hello
    },
}
</script>