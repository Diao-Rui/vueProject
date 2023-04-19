<template>
    <div>
        <h1>{{ msg }}</h1>
        <hr>
        <!-- 使用混入的数据 -->
        <ul>
            <li>name:{{ name }}</li>
            <li>age:{{ age }}</li>
            <li>sex:{{ sex }}</li>
        </ul>
    </div>
</template>

<script>
// 导入混入的模块
import { mixin } from '../mixin'
export default {
    name: 'HelloView',
    data() {
        return {
            msg: 'hello world'
        }
    },
    // 注册混入
    mixins: [mixin]
}
</script>

<style></style>