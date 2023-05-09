<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 需要子传父信息的地方都是用组件自定义事件 -->
                <todoInput @addTodo="addTodo" />
                <!-- 组件自定义事件只能解决子传父的问题，不能解决孙子传祖先，兄弟之间互传等 -->
                <todoList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
                <todoTotal :todos="todos" @doneAll="doneAll" @clearDone="clearDone" />
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
            // 若没找到key则返回空，使用空数组代替，否则不能有length属性
            todos: JSON.parse(localStorage.getItem('todos')) || []
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
        // 更新todo
        updateTodo(id, value) {
            this.todos.forEach((item) => {
                if (item.id === id) {
                    item.title = value
                }
            })
        },
        // 消息订阅会返回两个值用占位符（messageName，data）
        deleteTodo(_, id) {
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
    },
    watch: {
        // 简写方法，浅监听，只能监测到对象变化，检测不到对象的属性变化
        // todos(value) {
        //     localStorage.setItem('todos', JSON.stringify(value))
        // }
        // 深度监听，能够监测到所有的变化
        todos: {
            deep: true,
            handler(value) {
                // 将数据类型转为JSON字符串
                localStorage.setItem('todos', JSON.stringify(value))
            }
        }
    },
    mounted() {
        // 给事件总线绑定事件
        this.$bus.$on('checkTodo', this.checkTodo)
        // this.$bus.$on('deleteTodo', this.deleteTodo)
        // 给全局事件总线绑定修改事件
        this.$bus.$on('updateTodo', this.updateTodo)
        // 订阅消息
        this.pubsubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
    },
    beforeDestroy() {
        //销毁总线事件
        this.$bus.$off('checkTodo')
        // this.$bus.$off('deleteTodo')
        // 取消订阅
        pubsub.unsubscribe(this.pubsubId)
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

.btn-edit {
    color: #fff;
    background-color: skyblue;
    margin-right: 5px;
    border: 1px solid rgb(122, 184, 208);
}

.btn-edit:hover {
    color: #fff;
    background-color: rgb(122, 184, 208);
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