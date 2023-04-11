<template>
	<div>State Index Page</div>
	<div>component-local counter state：{{ counter }}</div>
	<div>component-across count shared state：{{ sharedCount }}</div>
	<button @click="sharedCount--">-1</button>
</template>

<script setup lang="ts">
	useHead({
		title: "State Index Page"
	})

	const counter = useState("counter", () => Math.round(Math.random() * 1000))

	const sharedCount = useCount()
</script>

<style scoped></style>
