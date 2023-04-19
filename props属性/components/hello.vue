<template>
    <div>
        <h1>{{ msg }}</h1>
        <hr>
        <ul>
            <li>name:{{ name }}</li>
            <li>age:{{ age }}</li>
            <li>sex:{{ sex }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloView',
    // 接收父组件传递的信息
    // 第一种方式数组
    // props: ['name', 'age', 'sex'],
    // 第二中限定类型的对象
    // props: {
    //     name: String,
    //     age: Number,
    //     sex: String
    // },
    // 第三种限制必须存在
    props: {
        name: {
            type: String,
            required: true
        },
        sex: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99
        }
    },
    data() {
        return {
            msg: 'hello world'
        }
    },
}
</script>

<style></style>