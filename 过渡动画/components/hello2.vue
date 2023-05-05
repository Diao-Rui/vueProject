<template>
    <div>
        <button @click="isShow = !isShow">点我切换</button>
        <!-- 定义动画的元素 -->
        <!-- appear进入页面是及执行一次动画 -->
        <transition appear name="animate__animated animate__bounce" enter-active-class="animate__heartBeat"
            leave-active-class="animate__backOutUp">
            <h1 v-show="isShow">hello world</h1>
        </transition>
    </div>
</template>

<script>
import 'animate.css';
export default {
    name: 'HelloView',
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>