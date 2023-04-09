<template>
	<div>
		<h3>Home Page</h3>
	</div>
</template>

<script setup lang="ts">
	const title = ref("Home")
	const meta = reactive({
		description: "This is Home Page description",
		keywords: "keyword1,keyword2,keyword3"
	})
	useHead({
		title,
		meta: [
			{ name: "description", content: meta.description },
			{ name: "keywords", content: meta.keywords }
		]
	})
</script>

<style scoped></style>
