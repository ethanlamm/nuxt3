<template>
	<div>
		<h3>Server Layout</h3>
		<NuxtLink to="/serverApi">Server API - Basic Usage</NuxtLink>
		<NuxtLink to="/serverApi/params">Server API - Params</NuxtLink>
		<NuxtLink to="/serverApi/methods">Server API - Methods</NuxtLink>
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
