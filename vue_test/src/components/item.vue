<template>
    <div class="box">
        <input type="checkbox" :checked="item.done" @change="handChange(item.id)">
        <span>{{ item.todo }}</span>
        <button>删除</button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['item', 'changeDone'],
    methods: {
        handChange(id) {
            this.changeDone(id)
        }
    }
}
</script>

<style scoped>
.box {
    width: 90%;
    height: 30px;
    margin: 3%;
    padding: 2%;
    display: flex;
    border-bottom: 1px solid skyblue;
    font-size: 20px;
}

input {
    zoom: 1.5;
}

span {
    margin-left: 3%;
}

button {
    margin-left: 65%;
    color: #fff;
    background-color: rgb(239, 50, 50);
}
</style>