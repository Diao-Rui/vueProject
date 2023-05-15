<template>
    <ul>
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
    </ul>
</template>

<script>
export default {
    name: 'DetailView',
    //props接收参数
    props: ['id', 'title'],
    mounted() {
        console.log(this.$route)
    },
}
</script>