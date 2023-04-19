<template>
    <div class="box">
        <input type="checkbox" :checked="item.done">
        <span>{{ item.todo }}</span>
        <button>删除</button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['item']
}
</script>

<style scoped>
.box {
    width: 90%;
    height: 30px;
    margin: 3%;
    padding: 2%;
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
    margin-left: 70%;
    color: #fff;
    background-color: rgb(239, 50, 50);
}
</style>