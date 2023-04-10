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

	const runtimeConfig = useRuntimeConfig()
	// console.log(runtimeConfig)

	// pnpm add @type/node -D
	if (process.server) {
		console.log("run in server side")
		console.log(runtimeConfig.apiKey, runtimeConfig.apiSecret)
		console.log("获取 .env 文件定义的变量：", process.env.NUXT_API_KEY, process.env.NUXT_API_SECRET)
	} else {
		console.log("run in client side")
		console.log(runtimeConfig.public.theme)
		console.log("process in client side：", process)
	}
</script>

<style scoped></style>
