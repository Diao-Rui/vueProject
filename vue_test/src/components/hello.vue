<template>
    <div>
        <button @click="getInfo">{{ msg }}</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'HelloView',
    data() {
        return {
            msg: '登录'
        }
    },
    methods: {
        getInfo() {
            axios.post()
        }
    }
}
</script>

<style></style>