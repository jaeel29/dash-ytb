<template>
	<div>
		<!-- Trigger Button (optional) -->
		<button @click="isOpen = true" class="trigger-button">
			Open Command Palette
			<kbd class="kbd">⌘/</kbd>
		</button>

		<!-- Modal -->
		<Modal v-model="isOpen" variant="glass" size="lg">
			<div class="command-palette">
				<!-- Search Input -->
				<div class="search-bar">
					<Icon name="lucide:search" size="20" mode="svg" class="search-icon" />
					<input
						ref="searchInput"
						v-model="searchQuery"
						type="text"
						placeholder="Type a command or search"
						class="search-input"
						autofocus
					/>
					<kbd class="kbd">⌘/</kbd>
				</div>

				<!-- Navigation Tabs -->
				<div class="nav-tabs">
					<button
						v-for="tab in tabs"
						:key="tab.id"
						:class="['tab', { active: activeTab === tab.id }]"
						@click="activeTab = tab.id"
					>
						<Icon :name="tab.icon" size="16" mode="svg" />
						<span>{{ tab.label }}</span>
					</button>
				</div>

				<!-- Recent Section -->
				<div class="section">
					<h3 class="section-title">Recent</h3>
					<div class="items-list">
						<a v-for="item in recentItems" :key="item.id" href="#" class="item">
							<Icon :name="item.icon" size="20" mode="svg" class="item-icon" />
							<span class="item-text">{{ item.text }}</span>
							<span v-if="item.badge" :class="['badge', `badge-${item.badgeColor}`]">{{
								item.badge
							}}</span>
						</a>
					</div>
				</div>

				<!-- Quick Actions -->
				<div class="section">
					<div class="items-list">
						<a v-for="action in quickActions" :key="action.id" href="#" class="item">
							<Icon :name="action.icon" size="20" mode="svg" class="item-icon" />
							<span class="item-text">{{ action.text }}</span>
							<span v-if="action.count" class="count">{{ action.count }}</span>
						</a>
					</div>
				</div>

				<!-- Footer -->
				<div class="footer">
					<div class="footer-item">
						<kbd class="footer-kbd">esc</kbd>
						<span>close</span>
					</div>
					<div class="footer-item">
						<kbd class="footer-kbd">#</kbd>
						<span>tags</span>
					</div>
					<div class="footer-item">
						<kbd class="footer-kbd">↑</kbd>
						<kbd class="footer-kbd">↓</kbd>
						<span>navigate</span>
					</div>
					<div class="footer-item">
						<kbd class="footer-kbd">↩</kbd>
						<span>open</span>
					</div>
					<div class="footer-item">
						<kbd class="footer-kbd">←</kbd>
						<span>parent</span>
					</div>
				</div>
			</div>
		</Modal>
	</div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
const searchQuery = ref('');
const activeTab = ref('workflows');
const searchInput = ref<HTMLInputElement | null>(null);

// Keyboard shortcut to open modal (⌘/ or Ctrl/)
useKeyboard('/', () => {
	isOpen.value = !isOpen.value;
}, { metaKey: true });

// Focus input when modal opens
watch(isOpen, (value) => {
	if (value) {
		nextTick(() => {
			searchInput.value?.focus();
		});
	}
});

const tabs = [
	{ id: 'workflows', label: 'Workflows', icon: 'lucide:workflow' },
	{ id: 'teams', label: 'Teams', icon: 'lucide:users' },
	{ id: 'documents', label: 'Documents', icon: 'lucide:file-text' },
	{ id: 'tasks', label: 'lucide:check-square', icon: 'lucide:check-square' },
	{ id: 'projects', label: 'Projects', icon: 'lucide:folder' },
];

const recentItems = [
	{ id: 1, icon: 'lucide:folder', text: 'Sisyphus Ventures', badge: 'Projects', badgeColor: 'purple' },
	{
		id: 2,
		icon: 'lucide:map',
		text: 'Add Sisyphus Ventures Sitemap',
		badge: 'Tasks',
		badgeColor: 'blue',
	},
	{ id: 3, icon: 'lucide:hash', text: 'Add tag', badge: null, badgeColor: null },
];

const quickActions = [
	{ id: 1, icon: 'lucide:bell', text: 'Remind me', count: null },
	{ id: 2, icon: 'lucide:bell', text: 'Notifications', count: 8 },
	{ id: 3, icon: 'lucide:message-square', text: 'Messages', count: 4 },
	{ id: 4, icon: 'lucide:bar-chart-2', text: 'Dashboard', count: null },
	{ id: 5, icon: 'lucide:search', text: 'Advanced search', count: null },
];
</script>

<style scoped>
.trigger-button {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 16px;
	background: var(--bg-primary);
	border: 1px solid var(--border-primary);
	border-radius: 8px;
	color: var(--text-primary);
	font-size: 14px;
	transition: all 0.2s;
}

.trigger-button:hover {
	border-color: var(--border-secondary);
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

/* Command Palette */
.command-palette {
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 0;
}

/* Search Bar */
.search-bar {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 16px 20px;
	background: rgba(255, 255, 255, 0.05);
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
	font-size: 16px;
	color: rgba(255, 255, 255, 0.9);
}

.search-input::placeholder {
	color: rgba(255, 255, 255, 0.4);
}

.search-bar .kbd {
	background: rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 0.6);
}

/* Navigation Tabs */
.nav-tabs {
	display: flex;
	gap: 8px;
	padding: 0 4px;
	overflow-x: auto;
}

.tab {
	display: flex;
	align-items: center;
	gap: 6px;
	padding: 8px 12px;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 500;
	color: rgba(255, 255, 255, 0.6);
	transition: all 0.2s;
	white-space: nowrap;
}

.tab:hover {
	background: rgba(255, 255, 255, 0.05);
	color: rgba(255, 255, 255, 0.8);
}

.tab.active {
	background: rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 1);
}

/* Section */
.section {
	margin-top: 16px;
}

.section-title {
	font-size: 13px;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.5);
	text-transform: uppercase;
	letter-spacing: 0.5px;
	margin-bottom: 8px;
	padding: 0 4px;
}

/* Items List */
.items-list {
	display: flex;
	flex-direction: column;
	gap: 2px;
}

.item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 12px 12px;
	border-radius: 8px;
	color: rgba(255, 255, 255, 0.9);
	font-size: 14px;
	transition: all 0.2s;
}

.item:hover {
	background: rgba(255, 255, 255, 0.08);
}

.item-icon {
	color: rgba(255, 255, 255, 0.6);
	flex-shrink: 0;
}

.item-text {
	flex: 1;
}

.badge {
	padding: 4px 8px;
	border-radius: 6px;
	font-size: 12px;
	font-weight: 500;
}

.badge-purple {
	background: rgba(168, 85, 247, 0.2);
	color: #a855f7;
}

.badge-blue {
	background: rgba(96, 165, 250, 0.2);
	color: #60a5fa;
}

.count {
	padding: 2px 8px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 12px;
	font-size: 12px;
	color: rgba(255, 255, 255, 0.6);
}

/* Footer */
.footer {
	display: flex;
	align-items: center;
	gap: 16px;
	padding: 12px 12px 0;
	margin-top: 8px;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding-top: 16px;
}

.footer-item {
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
