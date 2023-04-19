<template>
    <div class="footer">
        <input type="checkbox">
        <span>已完成0/总计{{ todoTotal }}</span>
    </div>
</template>

<script>
export default {
    name: 'TodoTotal',
    props: ['todoTotal']
}
</script>

<style scoped>
.footer {
    width: 100%;
    font-size: 20px;
}
</style>