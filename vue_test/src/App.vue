<template>
    <!-- 定义一个容器 -->
    <div class="container">
        <!-- search组件 调用new VueComponent-->
        <Search />
        <!-- list组件 -->
        <List />
    </div>
</template>

<script>
// 引入组件
import Search from './components/search'
import List from './components/list'
export default {
    name: 'App',
    // 注册组件
    components: { Search, List }
}
</script>