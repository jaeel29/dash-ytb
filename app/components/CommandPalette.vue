<template>
	<Modal v-model="isOpen" variant="glass" size="lg">
		<div class="command-palette">
			<h2 class="title">Command Palette</h2>
			<p class="description">Press Cmd+\ to toggle this modal</p>

			<!-- Search -->
			<div class="search-bar">
				<Icon name="lucide:search" size="20" mode="svg" class="search-icon" />
				<input ref="searchInput" type="text" placeholder="Type a command or search..." class="search-input" autofocus />
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
			<div class="footer">
				<div class="footer-hint">
					<kbd class="footer-kbd">esc</kbd>
					<span class="footer-hint-text">close</span>
				</div>
				<div class="footer-hint">
					<kbd class="footer-kbd">↑</kbd>
					<kbd class="footer-kbd">↓</kbd>
					<span class="footer-hint-text">navigate</span>
				</div>
				<div class="footer-hint">
					<kbd class="footer-kbd">↩</kbd>
					<span class="footer-hint-text">select</span>
				</div>
			</div>
		</div>
	</Modal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false });
const searchInput = ref<HTMLInputElement | null>(null);

// Keyboard shortcut to open modal (⌘\ or Ctrl+\)
useKeyboard(
	'\\',
	() => {
		isOpen.value = !isOpen.value;
	},
	{ metaKey: true }
);

// Focus input when modal opens
watch(isOpen, (value) => {
	if (value) {
		nextTick(() => {
			searchInput.value?.focus();
		});
	}
});
</script>

<style scoped>
.command-palette {
	display: flex;
	flex-direction: column;
	gap: 24px;
}

.title {
	font-size: 24px;
	font-weight: 600;
	color: var(--cmd-palette-title);
	margin: 0;
}

.description {
	font-size: 14px;
	color: var(--cmd-palette-description);
	margin: -16px 0 0 0;
}

.search-bar {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 14px 16px;
	background: var(--cmd-palette-search-bg);
	border: 1px solid var(--cmd-palette-search-border);
	border-radius: 12px;
	transition: all 0.2s;
}

.search-bar:focus-within {
	border-color: var(--cmd-palette-search-focus-border);
	background: var(--cmd-palette-search-focus-bg);
}

.search-icon {
	color: var(--cmd-palette-search-icon);
	flex-shrink: 0;
}

.search-input {
	flex: 1;
	border: none;
	outline: none;
	background: transparent;
	font-size: 15px;
	color: var(--cmd-palette-search-text);
}

.search-input::placeholder {
	color: var(--cmd-palette-search-placeholder);
}

.kbd {
	padding: 4px 8px;
	background: var(--cmd-palette-kbd-bg);
	border: 1px solid var(--cmd-palette-kbd-border);
	border-radius: 6px;
	font-size: 12px;
	color: var(--cmd-palette-kbd-text);
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
	color: var(--cmd-palette-section-title);
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
	color: var(--cmd-palette-item-text);
	font-size: 14px;
	text-align: left;
	transition: all 0.2s;
	border: 1px solid transparent;
}

.action-item:hover {
	background: var(--cmd-palette-item-hover-bg);
	/* border-color: var(--cmd-palette-item-hover-border); */
}

.action-item:active {
	background: var(--cmd-palette-item-active-bg);
}

.action-item svg {
	color: var(--cmd-palette-item-icon);
}

.footer {
	display: flex;
	align-items: center;
	gap: 16px;
	padding-top: 16px;
	border-top: 1px solid var(--cmd-palette-footer-border);
}

.footer-hint {
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 12px;
	color: var(--cmd-palette-footer-text);
}

.footer-kbd {
	padding: 3px 6px;
	background: var(--cmd-palette-kbd-bg);
	border: 1px solid var(--cmd-palette-kbd-border);
	border-radius: 4px;
	font-size: 11px;
	color: var(--cmd-palette-kbd-text);
	font-family: 'Inter', sans-serif;
	font-weight: 500;
}

.footer-hint-text {
	color: var(--cmd-palette-kbd-text);
}
</style>
