<template>
	<div class="error-container">
		<h1 v-if="error.statusCode === 404">Page not found</h1>
		<h1 v-else>An error occurred</h1>
		<p>{{ error.message }}</p>
		<button @click="handleError">Go Home</button>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	error: {
		statusCode: number;
		statusMessage: string;
		message: string;
	};
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
.error-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	text-align: center;
}
</style>
