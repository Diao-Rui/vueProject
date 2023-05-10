<template>
	<div>
		<h1>当前求和为：{{ $store.state.sum }}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
export default {
	name: 'ChildView',
	data() {
		return {
			n: 1, //用户选择的数字
		}
	},
	methods: {
		increment() {
			// 调用store中的commit
			this.$store.commit('ADD', this.n)
		},
		decrement() {
			this.$store.commit('DECREMENT', this.n)
		},
		incrementOdd() {
			this.$store.dispatch('incrementOdd', this.n)
		},
		incrementWait() {
			this.$store.dispatch('incrementWait', this.n)
		},
	},
}
</script>

<style lang="css">
button {
	margin-left: 5px;
}
</style>
