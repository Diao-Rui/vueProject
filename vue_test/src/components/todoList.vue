<template>
    <div class="content">
        <Item v-for="item in todoList" :key="item.id" :item="item" />
    </div>
</template>

<script>
import Item from './item.vue';
export default {
    name: 'TodoList',
    components: {
        Item
    },
    props: ['todoList']
}
</script>
<style scoped>
.content {
    width: 100%;
    height: 100%;
    text-align: left;
    overflow: auto;
}
</style>
