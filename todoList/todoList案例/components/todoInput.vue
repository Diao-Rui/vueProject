<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add" />
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'TodoInput',
    // 接收父组件传递的方法
    props: ['addTodo'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        add() {
            this.title = this.title.trim()
            if (!this.title) return alert('输入不能为空')
            const todo = {
                id: nanoid(),
                title: this.title,
                done: false
            }
            // 调用父组件的方法，传递信息
            this.addTodo(todo)
            this.title = ''
        }
    }

}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>