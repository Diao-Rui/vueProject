<template>
	<div>
		<child />
		<hr>
		<Person />
	</div>
</template>

<script>
import Child from './components/Child'
import Person from './components/Person'

export default {
	name: 'App',
	components: { Child, Person },
	mounted() {
		// console.log('App',this)
	},
}
</script>
