<template>
	<div class="container">
		<Category title="美食">
			<!-- 数据格式为外层封装一个名称，内层为数据foods{foods:foods} -->
			<!-- 新写法 -->
			<template slot-scope="foods">
				<ul>
					<li v-for="(food, index) in foods.foods" :key="index">{{ food }}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<!-- 久写法 -->
			<!-- ｛模板解析把外层脱掉｝ -->
			<template scope="{foods}">
				<ol>
					<li v-for="(food, index) in foods" :key="index">{{ food }}</li>
				</ol>
			</template>
		</Category>

		<Category title="电影">

		</Category>
	</div>
</template>

<script>
import Category from './components/Category'
export default {
	name: 'App',
	components: { Category },
	data() {
		return {

		}
	},
}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: space-around;
}
</style>
