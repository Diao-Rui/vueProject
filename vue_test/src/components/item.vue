<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handChange(todo.id)" />
            <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
            <!-- <input type="checkbox" v-model="todo.done"/> -->
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <!-- 绑定ref操作dom -->
            <input type="text" v-show="todo.isEdit" :value="todo.title" @blur="updateTodo(todo, $event)" ref="input" />
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        // 勾选or取消勾选
        handChange(id) {
            // 通过事件总线给APP发送信息
            this.$bus.$emit('checkTodo', id)
        },
        // 删除元素
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                // this.$bus.$emit('deleteTodo', id)
                // 发布消息
                pubsub.publish('deleteTodo', id)
            }
        },
        handleEdit(todo) {
            // 判断是否有这个属性
            /**Do not access Object.prototype method 'hasOwnProperty' from target object
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            }*/
            if (todo.hasOwnProperty.call('isEdit')) {
                todo.isEdit = true
            }
            else {
                // 为todo对象添加一个属性
                this.$set(todo, 'isEdit', true)
            }
            // 点击完编辑实现自动聚焦
            // 下一次DOM更新完成后调用
            this.$nextTick(function () {
                // 操作绑定ref的input的dom
                this.$refs.input.focus()
            })
        },
        updateTodo(todo, event) {
            if (!event.target.value.trim()) return alert('输入不能为空')
            // 调用全局事件总线发送信息
            this.$bus.$emit('updateTodo', todo.id, event.target.value)
            todo.isEdit = false
        }
    }
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>