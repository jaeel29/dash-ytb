<template>
	<div class="dashboard-layout">
		<Sidebar />
		<main class="main-content">
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.dashboard-layout {
	display: flex;
	min-height: 100vh;
	background: var(--bg-secondary);
}

.main-content {
	flex: 1;
	margin-left: 280px;
	overflow-y: auto;
	background: var(--bg-secondary);
	color: var(--text-primary);
}
</style>
