<template>
    <div>
        <h1 ref="title">欢迎学习vue</h1>
        <p ref="pid">vue欢迎你</p>
        <hr>
        <hello ref="hello"></hello>
    </div>
</template>

<script>
import Hello from './components/hello.vue'
export default {
    name: 'App',
    components: {
        Hello
    },
    mounted() {
        this.showDom()
    },
    // 使用ref属性来获取真实DOM
    methods: {
        showDom() {
            // 获取素有绑定ref的标签
            console.log(this.$refs);
            // 获取HTML元素的真实DOM
            console.log(this.$refs.title);
            // 获取组件的vc（VueComponent）
            console.log(this.$refs.hello);
        }
    }
}
</script>