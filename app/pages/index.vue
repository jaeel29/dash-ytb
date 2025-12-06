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

		<!-- Example Modal (opens with Cmd+\) -->
		<Modal v-model="isModalOpen" variant="glass" size="lg">
			<div class="modal-demo">
				<h2 class="modal-title">Command Palette</h2>
				<p class="modal-description">Press Cmd+\ to toggle this modal</p>

				<!-- Search -->
				<div class="modal-search">
					<Icon name="lucide:search" size="20" mode="svg" class="search-icon" />
					<input type="text" placeholder="Type a command or search..." class="search-input" autofocus />
					<kbd class="kbd">⌘\</kbd>
				</div>

				<!-- Quick Actions -->
				<div class="actions-section">
					<h3 class="section-title">Quick Actions</h3>
					<div class="actions-list">
						<button class="action-item">
							<Icon name="lucide:file-plus" size="20" mode="svg" />
							<span>Create new project</span>
						</button>
						<button class="action-item">
							<Icon name="lucide:folder" size="20" mode="svg" />
							<span>Open recent</span>
						</button>
						<button class="action-item">
							<Icon name="lucide:settings" size="20" mode="svg" />
							<span>Settings</span>
						</button>
						<button class="action-item">
							<Icon name="lucide:users" size="20" mode="svg" />
							<span>Team members</span>
						</button>
					</div>
				</div>

				<!-- Footer -->
				<div class="modal-footer">
					<div class="footer-hint">
						<kbd class="footer-kbd">esc</kbd>
						<span>close</span>
					</div>
					<div class="footer-hint">
						<kbd class="footer-kbd">↑</kbd>
						<kbd class="footer-kbd">↓</kbd>
						<span>navigate</span>
					</div>
					<div class="footer-hint">
						<kbd class="footer-kbd">↩</kbd>
						<span>select</span>
					</div>
				</div>
			</div>
		</Modal>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'dashboard',
});

const isModalOpen = ref(false);

// Open modal with Cmd+\ or Ctrl+\
useKeyboard(
	'\\',
	() => {
		isModalOpen.value = !isModalOpen.value;
	},
	{ metaKey: true }
);
</script>

<style scoped>
.page-wrapper {
	position: relative;
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
	background: var(--neutral-100);
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
	background: #22c55e;
	border-radius: 50%;
	border: 2px solid var(--bg-primary);
}

/* Modal Demo Styles */
.modal-demo {
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.modal-title {
	font-size: 24px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.95);
	margin: 0;
}

.modal-description {
	font-size: 14px;
	color: rgba(255, 255, 255, 0.6);
	margin: -16px 0 0 0;
}

.modal-search {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	background: rgba(255, 255, 255, 0.05);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 12px;
}

.search-icon {
	color: rgba(255, 255, 255, 0.5);
	flex-shrink: 0;
}

.search-input {
	flex: 1;
	border: none;
	outline: none;
	background: transparent;
	font-size: 15px;
	color: rgba(255, 255, 255, 0.9);
}

.search-input::placeholder {
	color: rgba(255, 255, 255, 0.4);
}

.kbd {
	padding: 4px 8px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 6px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
	font-family: 'Inter', sans-serif;
	font-weight: 500;
}

.actions-section {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.section-title {
	font-size: 13px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.5);
	text-transform: uppercase;
	letter-spacing: 0.5px;
	margin: 0;
}

.actions-list {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.action-item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 14px;
	background: transparent;
	border-radius: 8px;
	color: rgba(255, 255, 255, 0.9);
	font-size: 14px;
	text-align: left;
	transition: all 0.2s;
}

.action-item:hover {
	background: rgba(255, 255, 255, 0.08);
}

.action-item svg {
	color: rgba(255, 255, 255, 0.6);
}

.modal-footer {
	display: flex;
	align-items: center;
	gap: 16px;
	padding-top: 16px;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-hint {
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.5);
}

.footer-kbd {
	padding: 3px 6px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 4px;
	font-size: 11px;
	color: rgba(255, 255, 255, 0.6);
	font-family: 'Inter', sans-serif;
	font-weight: 500;
}
</style>
