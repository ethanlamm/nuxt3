<template>
	<div>Shared State</div>
	<div>component-across count shared state：{{ sharedCount }}</div>
	<button @click="sharedCount++">+1</button>
</template>

<script setup lang="ts">
	useHead({
		title: "Shared State"
	})

	const sharedCount = useCount()
</script>

<style scoped></style>
