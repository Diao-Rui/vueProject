<template>
    <div class="app">
        <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>

        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSch="getScoolName" />
        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
        <Student v-on:getStu="getStudentName" />

        <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
        <Student ref="student" />
    </div>
</template>

<script>
import Student from './components/Student'
import School from './components/School'

export default {
    name: 'App',
    components: { School, Student },
    data() {
        return {
            msg: '你好啊！',
            studentName: ''
        }
    },
    methods: {
        getScoolName(name) {
            console.log('App组件收到了，学校名称', name);
        },
        getStudentName(name) {
            console.log('App组件收到了，学生名称', name);
        },
    },
    mounted() {
        // this.$refs.student.$on('atguigu', this.getStudentName) //绑定自定义事件
        // this.$refs.student.$once('atguigu',this.getStudentName) //绑定自定义事件（一次性）
    },
}
</script>

<style scoped>
.app {
    background-color: gray;
    padding: 5px;
}
</style>
