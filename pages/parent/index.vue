<template>
	<div>
		<h3>Child Index Page</h3>
		<div v-if="JSON.stringify($route.query) !== '{}'">query参数：{{ $route.query }}</div>
		<br />
		<button @click="handleClick1">navigateTo '/parent/3333'</button>
		<button @click="handleClick2">navigateTo '/parent?b=2222'</button>
	</div>
</template>

<script setup lang="ts">
	// 自定义meta数据
	definePageMeta({
		title: "Parent Index Page",
		xxx: "111"
	})
	const handleClick1 = () => {
		navigateTo("/parent/3333")
	}
	const handleClick2 = () => {
		navigateTo({
			path: "/parent",
			query: {
				b: 2222
			}
		})
	}
</script>

<style scoped>
	button {
		margin: 0 10px;
	}
</style>
