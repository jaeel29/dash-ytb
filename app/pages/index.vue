<template>
	<div class="page-wrapper">
		<!-- Header Actions -->
		<div class="header-actions">
			<button class="icon-button search-button" @click="isModalOpen = true">
				<Icon name="lucide:search" size="20" mode="svg" />
				<kbd class="shortcut-kbd">⌘\</kbd>
			</button>
			<button class="icon-button">
				<Icon name="lucide:bell" size="20" mode="svg" />
				<span class="notification-dot"></span>
			</button>
			<button class="icon-button">
				<Icon name="lucide:more-vertical" size="20" mode="svg" />
			</button>
		</div>

		<!-- Page Content -->
		<Analytics />
		<AllProjects />

		<!-- Command Palette (opens with Cmd+\) -->
		<CommandPalette v-model="isModalOpen" />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard',
});

const isModalOpen = ref(false);
</script>

<style scoped>
.page-wrapper {
	position: relative;
	max-width: 60vw;
	margin: 0 auto;
	height: 2000px;
}

.header-actions {
	position: absolute;
	top: 32px;
	right: 40px;
	display: flex;
	align-items: center;
	gap: 8px;
	z-index: 10;
}

.icon-button {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	color: var(--text-secondary);
	transition: all 0.2s;
}

.icon-button:hover {
	background: var(--bg-hover);
	color: var(--text-primary);
}

.search-button {
	width: auto;
	padding: 0 12px;
	gap: 8px;
	border-radius: 999px;
}

.shortcut-kbd {
	padding: 4px 6px;
	background: var(--bg-tertiary);
	border: 1px solid var(--border-primary);
	border-radius: 8px;
	font-size: 14px;
	font-weight: 500;
	color: var(--text-secondary);
	font-family: 'Inter', sans-serif;
	line-height: 1;
}

.notification-dot {
	position: absolute;
	top: 10px;
	right: 10px;
	width: 8px;
	height: 8px;
	background: var(--success-500);
	border-radius: 50%;
	border: 2px solid var(--bg-secondary);
}
</style>
