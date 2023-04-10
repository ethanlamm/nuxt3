<template>
	<div>
		<h3>Data Fetching Layout</h3>
		<NuxtLink to="/data">Default Data Fetching</NuxtLink>
		<NuxtLink to="/data/lazy">Lazy Data Fetching</NuxtLink>
		<div class="children">
			<NuxtPage />
		</div>
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
