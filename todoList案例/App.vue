<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <todoInput :addTodo="addTodo" />
                <todoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
                <todoTotal :todos="todos" :doneAll="doneAll" :clearDone="clearDone" />
            </div>
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
                { id: '1234', title: '睡觉', done: true },
                { id: '123', title: '吃饭', done: true },
            ]
        }
    },
    methods: {
        // 接收子组件传递来的参数
        addTodo(todo) {
            console.log(todo);
            this.todos.unshift(todo)
        },
        checkTodo(id) {
            this.todos.forEach((item) => {
                if (item.id === id) {
                    item.done = !item.done
                }
            })
        },
        deleteTodo(id) {
            this.todos = this.todos.filter(item => item.id != id)
        },
        // 全选或取消全选
        doneAll(done) {
            this.todos.forEach(item => {
                item.done = done
            });
        },
        // 清空已选中的TODO
        clearDone() {
            this.todos = this.todos.filter(item => !item.done)
        }
    }
}
</script>
<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>