<template>
    <div class="app">
        <div class="head">
            <!-- 将父组件定义的方法传递给子组件 -->
            <todoInput :addTodo="addTodo" />
        </div>
        <div class="center">
            <todoList :todoList="todos" />
        </div>
        <div class="foooter">
            <todoTotal :total="todos.length" />
        </div>
    </div>
</template>

<script>
import todoInput from './components/todoInput.vue'
import todoList from './components/todoList.vue'
import todoTotal from './components/todoTotal.vue'
export default {
    name: 'App',
    components: {
        todoInput,
        todoList,
        todoTotal,
    },
    data() {
        return {
            todos: [
                { id: '1234', todo: '睡觉', done: true },
                { id: '123', todo: '吃饭', done: true },
            ]
        }
    },
    methods: {
        // 接收子组件传递来的参数
        addTodo(todo) {
            this.todos.unshift(todo)
        }
    }
}
</script>
<style>
.app {
    width: 500px;
    height: 400px;
    background-color: azure;
}

.head {
    width: 100%;
    height: 10%;
}

.center {
    width: 100%;
    height: 70%;
}

.footer {
    width: 100%;
    height: 20%;
}
</style>