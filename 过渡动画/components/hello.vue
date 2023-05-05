<template>
    <div>
        <button @click="isShow = !isShow">点我切换</button>
        <!-- 定义动画的元素 -->
        <!-- appear进入页面是及执行一次动画 -->
        <transition appear>
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
    background: rebeccapurple;
}

/* 设置进入是动画效果 */
.v-enter-active {
    /* 动画名、持续时长、是否匀速 */
    animation: hello 0.5s linear;
}

/* 设置退出是动画效果 */
.v-leave-active {
    animation: hello 0.5s linear reverse;
}

/* 定义动画 */
@keyframes hello {

    /* 动画开始的的地方 */
    from {
        /* 水平方向移动100% */
        transform: translateX(-100%);
    }

    /* 动画结束的地方 */
    to {
        transform: translateX(0px);
    }
}
</style>