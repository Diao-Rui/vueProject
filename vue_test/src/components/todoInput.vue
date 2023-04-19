<template>
    <div class="head">
        <input type="text" v-model="todo" placeholder="请输入代办项" @keyup.enter="add">
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
            todo: ''
        }
    },
    methods: {
        add() {
            if (!this.todo) return
            const todo = {
                id: nanoid(),
                todo: this.todo,
                done: false
            }
            // 调用父组件的方法，传递信息
            this.addTodo(todo)
            this.todo = ''
        }
    }

}
</script>

<style scoped>
head {
    width: 100%;
    text-align: center;
}

input {
    width: 90%;
    font-size: 25px;
    margin: 2%;
}
</style>