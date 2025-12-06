<template>
	<div class="page-container">
		<!-- Header -->
		<header class="page-header">
			<h1 class="page-title">My projects</h1>
		</header>

		<!-- Projects Grid -->
		<div class="projects-grid">
			<div v-for="i in 5" :key="i" class="project-card"></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page-container {
	padding: 32px 40px;
	max-width: 1400px;
}

/* Header */
.page-header {
	margin-bottom: 24px;
}

.page-title {
	font-size: 24px;
	font-weight: 600;
	color: var(--text-primary);
}

/* Search Bar */
.search-container {
	margin-bottom: 32px;
}

.search-bar {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 16px;
	background: var(--bg-primary);
	border: 1px solid var(--border-primary);
	border-radius: 12px;
	max-width: 600px;
	transition: all 0.2s;
}

.search-bar:focus-within {
	border-color: var(--border-focus);
	box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.search-icon {
	color: var(--text-tertiary);
	flex-shrink: 0;
}

.search-input {
	flex: 1;
	border: none;
	outline: none;
	background: transparent;
	font-size: 14px;
	color: var(--text-primary);
}

.search-input::placeholder {
	color: var(--text-tertiary);
}

.kbd {
	padding: 4px 8px;
	background: var(--bg-tertiary);
	border-radius: 6px;
	font-size: 12px;
	color: var(--text-tertiary);
	font-family: 'Inter', sans-serif;
	font-weight: 500;
}

/* Section Title */
.section-title {
	font-size: 18px;
	font-weight: 600;
	color: var(--text-primary);
	margin-bottom: 20px;
}

/* Projects Grid */
.projects-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 12px;
}

.project-card {
	border: 1px solid var(--neutral-100);
	border-radius: 12px;
	overflow: hidden;
	background: var(--white);
	transition: all 0.2s;
	cursor: pointer;
	height: 150px;
	position: relative;
	background-image: repeating-linear-gradient(
		45deg,
		transparent,
		transparent 10px,
		var(--neutral-100) 10px,
		var(--neutral-100) 11px
	);
}

.project-card:hover {
	border-color: var(--neutral-200);
	/* box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); */
}
</style>
