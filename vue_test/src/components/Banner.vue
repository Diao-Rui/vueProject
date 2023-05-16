<template>
	<div class="col-xs-offset-2 col-xs-8">
		<div class="page-header">
			<h2>Vue Router Demo</h2>
			<button @click="back">后退</button>
			<button @click="forward">前进</button>
			<button @click="test">测试一下go</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BannerView',
	methods: {
		back() {
			// 栈顶指针向下移动一步
			this.$router.back()
		},
		forward() {
			// 栈顶指针向上移动一步
			this.$router.forward()
		},
		go() {
			//正数栈顶指针往上
			//负数栈顶指针往下
			this.$router.go(-1)
		}
	}
}
</script>