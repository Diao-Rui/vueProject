<template>
	<div class="container">
		<child></child>
	</div>
</template>

<script>
import Child from './components/Child.vue'
export default {
	name: 'App',
	components: { Child },
	data() {
		return {

		}
	},
}
</script>
