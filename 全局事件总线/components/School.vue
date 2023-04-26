<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">点击为父组件发送数据</button>
    </div>
</template>

<script>
export default {
    name: 'SchoolView',
    // 接收父组件传递来的对象和函数
    data() {
        return {
            name: '尚硅谷',
            address: '北京',
        }
    },
    methods: {
        // 调用父组件的方法，给父组件发送信息
        sendSchoolName() {
            this.getSch(this.name)
        },
        // 定义事件回调函数
        getStuName(name) {
            console.log('school 收到了学生姓名', name);
        }
    },
    mounted() {
        // 给全局事件总线定义自定义事件
        this.$bus.$on('getStuName', this.getStuName)
    },
    beforeDestroy() {
        // 解绑
        this.$bus.$off('getStuName')
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>