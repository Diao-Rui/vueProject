<template>
    <div>
        <hello></hello>
        <hello2></hello2>
        <test></test>
        <test2></test2>
    </div>
</template>

<script>
import Hello from './components/hello.vue'
import Hello2 from './components/hello2.vue'
import test from './components/helloTest.vue'
import test2 from './components/helloTest2.vue'
export default {
    name: 'App',
    components: {
        Hello,
        test,
        test2,
        Hello2
    }
}
</script>

<style></style>