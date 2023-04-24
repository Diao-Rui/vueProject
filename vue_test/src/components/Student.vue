<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentlName">点我发送信息给父组件</button>
    </div>
</template>

<script>
export default {
    name: 'StudentView',
    data() {
        return {
            name: '张三',
            sex: '男',
        }
    },
    methods: {
        sendStudentlName() {
            // 触发父组件在自己身上绑定的自定义事件
            // $emit(事件名称，参数)
            // 传递参数给父组件
            this.$emit('getStu', this.name)
        },
    },
}
</script>

<style scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>
