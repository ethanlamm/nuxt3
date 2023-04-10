<template>
	<div>lazy data fetching</div>
	<p><b>useLazyFetch</b> and <b>useLazyAsyncData</b> <b>will not blocks navigation</b></p>
	<p>
		Meaning that it will navigate first, while requesting data in the hood, and then rendering the data when the request
		is completed
	</p>
	<p>That also means that you have to handle the situation where the data is null</p>
	<button @click="fetchData">get {{ type == "mountains" ? "rivers" : "mountains" }} data</button>
	<ul>
		<div v-if="pending">loading...</div>
		<li v-else v-for="m in mountains" :key="m.title">
			<div>title：{{ m.title }}</div>
			<div>description：{{ m.description }}</div>
		</li>
	</ul>
</template>

<script setup>
	const type = ref("mountains")
	const { data: mountains, pending, refresh, error } = await useLazyFetch(() => `https://api.nuxtjs.dev/${type.value}`)

	const fetchData = () => {
		type.value = type.value == "mountains" ? "rivers" : "mountains"
		refresh()
	}
</script>

<style scoped></style>
