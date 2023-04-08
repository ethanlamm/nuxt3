<template>
	<div>
		<h3>Child Index Page</h3>
		<div v-if="JSON.stringify($route.query) !== '{}'">
			query参数：{{ $route.query }}
		</div>
		<br />
		<button @click="handleClick1">navigateTo '/parent/3333'</button>
		<button @click="handleClick2">navigateTo '/parent?b=2222'</button>
	</div>
</template>

<script setup lang="ts">
	const handleClick1 = () => {
		navigateTo("/parent/3333")
	}
	const handleClick2 = () => {
		navigateTo({
			path: "/parent",
			query: {
				b: 2222,
			},
		})
	}
</script>

<style scoped>
	button {
		margin: 0 10px;
	}
</style>
