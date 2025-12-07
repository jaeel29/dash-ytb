<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
// Initialize theme before hydration to prevent flash
useHead({
	script: [
		{
			innerHTML: `
				(function() {
					const theme = localStorage.getItem('theme-preference') || 'system';
					let resolvedTheme = theme;

					if (theme === 'system') {
						resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
					}

					document.documentElement.classList.add(resolvedTheme);
					document.documentElement.setAttribute('data-theme', resolvedTheme);
				})();
			`,
			tagPosition: 'head',
			type: 'text/javascript',
		},
	],
}); // Theme is initialized in the plugin, no need to initialize here
</script>
