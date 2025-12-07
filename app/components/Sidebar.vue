<template>
	<aside class="sidebar">
		<!-- Header -->
		<div class="sidebar-header">
			<span class="logo-text">Dashboard</span>
		</div>

		<!-- Main Navigation -->
		<nav class="sidebar-nav">
			<NuxtLink to="/" class="nav-item" active-class="active">
				<Icon name="lucide:layout-dashboard" size="20" mode="svg" />
				<span>Overview</span>
			</NuxtLink>
			<NuxtLink to="/profile" class="nav-item" active-class="active">
				<Icon name="lucide:user" size="20" mode="svg" />
				<span>My profile</span>
			</NuxtLink>
			<NuxtLink to="/projects" class="nav-item" active-class="active">
				<Icon name="lucide:box" size="20" mode="svg" />
				<span>My projects</span>
			</NuxtLink>
			<NuxtLink to="/scheduled" class="nav-item" active-class="active">
				<Icon name="lucide:clock" size="20" mode="svg" />
				<span>Scheduled</span>
			</NuxtLink>

			<!-- Additional Navigation -->
			<NuxtLink to="/files" class="nav-item" active-class="active">
				<Icon name="lucide:file-text" size="20" mode="svg" />
				<span>All files</span>
			</NuxtLink>
			<NuxtLink to="/team" class="nav-item" active-class="active">
				<Icon name="lucide:users" size="20" mode="svg" />
				<span>Team members</span>
			</NuxtLink>
			<NuxtLink to="/appearance" class="nav-item" active-class="active">
				<Icon name="lucide:palette" size="20" mode="svg" />
				<span>Appearance</span>
			</NuxtLink>
		</nav>

		<!-- Bottom Navigation -->
		<nav class="sidebar-bottom">
			<NuxtLink to="/support" class="nav-item" active-class="active">
				<Icon name="lucide:help-circle" size="20" mode="svg" />
				<span>Support</span>
			</NuxtLink>
			<NuxtLink to="/settings" class="nav-item" active-class="active">
				<Icon name="lucide:settings" size="20" mode="svg" />
				<span>Settings</span>
			</NuxtLink>

			<!-- Theme Switcher -->
			<ClientOnly>
				<div class="theme-switcher">
					<button
						@click="setTheme('system')"
						class="theme-option"
						:class="{ active: selectedTheme === 'system' }"
						aria-label="System theme"
					>
						<Icon name="lucide:monitor" size="18" mode="svg" />
					</button>
					<button
						@click="setTheme('light')"
						class="theme-option"
						:class="{ active: selectedTheme === 'light' }"
						aria-label="Light theme"
					>
						<Icon name="lucide:sun" size="18" mode="svg" />
					</button>
					<button
						@click="setTheme('dark')"
						class="theme-option"
						:class="{ active: selectedTheme === 'dark' }"
						aria-label="Dark theme"
					>
						<Icon name="lucide:moon" size="18" mode="svg" />
					</button>
				</div>
			</ClientOnly>
		</nav>
	</aside>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';

const { selectedTheme, setTheme } = useTheme();
</script>

<style scoped>
.sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100vh;
	background: var(--bg-primary);
	border-right: 1px solid var(--border-primary);
	display: flex;
	flex-direction: column;
	padding: 20px;
	overflow-y: auto;
}

.sidebar-header {
	display: flex;
	align-items: center;
	gap: 8px;
	padding: 8px 12px;
	margin-bottom: 16px;
	cursor: pointer;
	border-radius: 8px;
	transition: background-color 0.2s;
}

.logo-text {
	font-size: 15px;
	font-weight: 600;
	color: var(--primary-600);
	flex: 1;
}

.chevron {
	color: var(--text-tertiary);
}

.sidebar-nav {
	display: flex;
	flex-direction: column;
	gap: 2px;
	margin-bottom: 24px;
}

.nav-item {
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 10px 12px;
	height: 40px;
	color: var(--text-secondary);
	font-size: 14px;
	font-weight: 500;
	border-radius: 8px;
	transition: all 0.2s;
	cursor: pointer;
}

.nav-item:hover {
	background: var(--bg-hover);
	color: var(--text-primary);
}

.nav-item.active {
	background: var(--primary-50);
	color: var(--primary-600);
}

.sidebar-bottom {
	margin-top: auto;
	display: flex;
	flex-direction: column;
	gap: 2px;
	padding-top: 16px;
	border-top: 1px solid var(--border-primary);
}

.theme-switcher {
	display: flex;
	align-items: center;
	gap: 4px;
	padding: 4px;
	background: var(--bg-secondary);
	border-radius: 8px;
	margin-top: 8px;
}

.theme-option {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	background: transparent;
	border: none;
	border-radius: 6px;
	color: var(--text-secondary);
	cursor: pointer;
	transition: all 0.2s;
}

.theme-option:hover {
	color: var(--text-primary);
	background: var(--bg-hover);
}

.theme-option.active {
	background: var(--bg-primary);
	color: var(--text-primary);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
