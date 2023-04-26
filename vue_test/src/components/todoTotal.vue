<template>
    <!-- 如果长度为0则不显示 -->
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: 'TodoTotal',
    props: ['todos'],
    computed: {
        doneTotal() {
            // 数据统计
            return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        },
        total() {
            return this.todos.length
        },
        isAll: {
            // 当计算属性被查看时调用
            get() {
                return this.doneTotal === this.total
            },
            // 计算属性被改变时调用
            set(value) {
                // 调用父组件绑定的自定义事件
                this.$emit('doneAll', value)
            }
        }
    },
    methods: {
        clearAll() {
            // 调用父组件绑定的自定义事件
            this.$emit('clearDone')
        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>