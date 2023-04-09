<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	useHead({
		titleTemplate: (pageTitle) => (pageTitle ? `${pageTitle} - Nuxt 3` : "Nuxt 3")
	})
</script>
