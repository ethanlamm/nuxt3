<template>
	<div>default data fetching</div>
	<p><b>useFetch</b> and <b>useAsyncData</b> will <b>blocks navigation</b> until its async handler is resolved</p>
	<br />
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
	const { data: mountains, pending, refresh, error } = await useFetch(() => `https://api.nuxtjs.dev/${type.value}`)

	const fetchData = () => {
		type.value = type.value == "mountains" ? "rivers" : "mountains"
		refresh()
	}
</script>

<style scoped></style>
