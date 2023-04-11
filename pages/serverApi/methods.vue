<template>
	<div>POST</div>
	<template v-if="pending">loading...</template>
	<template v-else>{{ data }}</template>
</template>

<script setup lang="ts">
	const { data, pending } = await useLazyFetch("/api/user/add", { method: "POST", body: { name: "zs", age: 18 } })
</script>

<style scoped></style>
