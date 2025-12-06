<template>
	<div class="page-container">
		<!-- Header -->
		<header class="page-header">
			<h1 class="page-title">All projects</h1>
		</header>

		<!-- Projects Grid -->
		<div class="projects-grid">
			<!-- Row 1: 2 cards -->
			<div class="project-card card-large">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">3D renders</h3>
					<p class="card-meta">18 images · 9 MB</p>
				</div>
			</div>

			<div class="project-card card-large">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">UI presentations</h3>
					<p class="card-meta">33 files · 286 MB</p>
				</div>
			</div>

			<!-- Row 2: 3 cards -->
			<div class="project-card">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">Dark mode ideas</h3>
					<p class="card-meta">42 images · 126 MB</p>
				</div>
			</div>

			<div class="project-card">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">Company retreat</h3>
					<p class="card-meta">246 images · 1.28 GB</p>
				</div>
			</div>

			<div class="project-card">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">Dashboard 3.0 inspo</h3>
					<p class="card-meta">22 images · 96 MB</p>
				</div>
			</div>

			<!-- Row 3: 3 cards -->
			<div class="project-card">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">Marketing assets</h3>
					<p class="card-meta">15 files · 48 MB</p>
				</div>
			</div>

			<div class="project-card">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">Brand guidelines</h3>
					<p class="card-meta">8 files · 24 MB</p>
				</div>
			</div>

			<div class="project-card">
				<div class="card-preview"></div>
				<div class="card-content">
					<h3 class="card-title">Product photos</h3>
					<p class="card-meta">156 images · 892 MB</p>
				</div>
			</div>
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

/* Projects Grid */
.projects-grid {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 20px;
}

.project-card {
	grid-column: span 2;
	border: 1px solid var(--neutral-100);
	border-radius: 12px;
	overflow: hidden;
	background: var(--bg-primary);
	transition: all 0.2s;
	cursor: pointer;
}

.project-card.card-large {
	grid-column: span 3;
}

.project-card:hover {
	border-color: var(--neutral-200);
}

.card-preview {
	border-bottom: 1px solid var(--neutral-100);
	overflow: hidden;
	background: var(--white);
	transition: all 0.2s;
	cursor: pointer;
	height: 150px;
	background-image: repeating-linear-gradient(
		45deg,
		transparent,
		transparent 10px,
		var(--neutral-100) 10px,
		var(--neutral-100) 11px
	);
}

.card-content {
	padding: 16px;
}

.card-title {
	font-size: 16px;
	font-weight: 600;
	color: var(--text-primary);
	margin-bottom: 4px;
}

.card-meta {
	font-size: 14px;
	color: var(--text-secondary);
}
</style>
