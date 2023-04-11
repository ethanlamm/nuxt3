<template>
	<h3>Parent Page Layout</h3>
	<NuxtLink to="/state">State Index Page</NuxtLink>
	<NuxtLink to="/state/shared">Shared State</NuxtLink>
	<div class="children">
		<NuxtPage />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	a {
		margin: 0 10px;
	}
	.children {
		padding: 20px;
	}
</style>
