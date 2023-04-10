<template>
	<div>
		<Head>
			<Title>About</Title>
			<Meta name="description" :content="description" />
		</Head>
		<h3>About Page</h3>
		<p>
			public目录下的资源，不会被打包工具进行处理，访问 <b>/*</b>
			<img src="/nuxt3.jpg" alt="" width="200" />
		</p>
		<p>
			assets目录下的资源，会被打包工具进行处理，访问 <b>~/assets/*</b>
			<img src="~/assets/nuxt3.jpg" alt="" width="200" />
		</p>
	</div>
</template>

<script setup lang="ts">
	// 可定义layout布局
	definePageMeta({
		layout: "about"
	})
	const description = ref("This is About Page description")
</script>

<style scoped>
	img {
		vertical-align: middle;
	}
</style>
