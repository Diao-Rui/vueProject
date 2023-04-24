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
    props: ['getSch'],
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
        }
    },
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>