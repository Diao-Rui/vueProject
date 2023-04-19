<template>
    <div>
        <h1>{{ msg }}</h1>
        <hr>
        <!-- 使用全局混入的数据 -->
        <ul>
            <!-- 应用全局过滤器 -->
            <li>name:{{ name | upper(name) }}</li>
            <li>age:{{ age }}</li>
            <li>sex:{{ sex }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloView',
    data() {
        return {
            msg: '子组件使用全局混入的数据'
        }
    },
}
</script>