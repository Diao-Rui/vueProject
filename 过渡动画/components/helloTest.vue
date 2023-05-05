<template>
    <div>
        <button @click="isShow = !isShow">点我切换</button>
        <!-- 定义动画的元素 -->
        <!-- appear进入页面是及执行一次动画 -->
        <!-- name指定特有的属性 -->
        <transition name="test" appear>
            <h1 v-show="isShow">hello world</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'HelloView',
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style>
h1 {
    background: rgb(190, 159, 220);
}

/* 进入的起点，离开的终点 */
.test-enter,
.test-leave-to {
    transform: translateX(-100%);
}

/* 激活动画 */
.test-enter-active,
.test-leave-active {
    transition: 0.5s linear;
}

/* 进入的终点，离开的起点 */
.test-leave,
.test-enter-to {
    transform: translateX(0);
}
</style>