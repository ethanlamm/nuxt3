<template>
	<div>
		<Head>
			<Title>About</Title>
			<Meta name="description" :content="description" />
		</Head>
		<h3>About Page</h3>
	</div>
</template>

<script setup lang="ts">
	// 可定义layout布局
	definePageMeta({
		layout: "about"
	})
	const description = ref("This is About Page description")
</script>

<style scoped></style>
