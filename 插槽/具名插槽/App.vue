<template>
	<div class="container">
		<Category title="美食">
			<img slot="cc" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
		</Category>

		<Category title="游戏">
			<!-- 普通注入方式 -->
			<ul slot="cc">
				<li v-for="(g, index) in games" :key="index">{{ g }}</li>
			</ul>

		</Category>

		<Category title="电影">
			<!--新的注入方式 -->
			<template v-slot:cc>
				<div>
					<video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
				</div>
			</template>
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
			foods: ['火锅', '烧烤', '小龙虾', '牛排'],
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
			films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
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
