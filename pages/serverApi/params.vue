<template>
	<b>params</b><br />
	<p>Request："/api/carts/2?a=111&b=222"</p>
	<p>Route Parameters：{{ data?.RouteParams }}</p>
	<p>Query Parameters：{{ data?.QueryParams }}</p>
</template>

<script setup lang="ts">
	const { data } = await useFetch("/api/carts/2?a=111&b=222")
</script>

<style scoped></style>
