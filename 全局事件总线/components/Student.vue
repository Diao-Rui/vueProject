<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentlName">点我发送信息给父组件</button>
        <button @click="sendName">点我发送信息给兄弟组件</button>
        <button @click="unbind">点我解绑自定义事件</button>
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
        sendName() {
            // 给全局事件总线发信息
            this.$bus.$emit('getStuName', this.name)
        },
        //解绑组件自定义事件
        unbind() {
            // 解绑一个事件
            this.$off('getStu')
            // 解绑多个自定义事件
            this.$off(['event1', 'event2', '...'])
            // 解绑所有自定义事件
            this.$off()
        }
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
