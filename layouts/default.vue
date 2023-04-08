<template>
	<div>
		<Header />
		<div class="slot">
			<slot />
		</div>
		<Footer />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	.slot {
		padding: 30px;
	}
</style>
