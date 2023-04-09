<template>
	<div>
		<Header />
		<div class="slot">
			<slot />
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	.slot {
		padding: 30px;
	}
</style>
