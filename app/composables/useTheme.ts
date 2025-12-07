

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme-preference';

// Initialize from localStorage immediately (client-side only)x§
const getInitialTheme = (): Theme => {
	if (typeof window === 'undefined') return 'system';
	const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
	return saved && ['light', 'dark', 'system'].includes(saved) ? saved : 'system';
};

const getInitialSystemTheme = (): ResolvedTheme => {
	if (typeof window === 'undefined') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Global state shared across all component instances
const selectedTheme = ref<Theme>(getInitialTheme());
const systemTheme = ref<ResolvedTheme>(getInitialSystemTheme());

export const useTheme = () => {
	// Computed property to get the actual resolved theme
	const resolvedTheme = computed<ResolvedTheme>(() => {
		if (selectedTheme.value === 'system') {
			return systemTheme.value;
		}
		return selectedTheme.value;
	});

	// Apply theme to document
	const applyTheme = (theme: ResolvedTheme) => {
		if (typeof document === 'undefined') return;

		const root = document.documentElement;
		root.classList.remove('light', 'dark');
		root.classList.add(theme);
		root.setAttribute('data-theme', theme);
	};

	// Set theme preference
	const setTheme = (theme: Theme) => {
		selectedTheme.value = theme;

		// Save to localStorage
		if (typeof window !== 'undefined') {
			localStorage.setItem(THEME_STORAGE_KEY, theme);
		}

		// Apply the resolved theme
		applyTheme(resolvedTheme.value);
	};

	// Initialize theme
	const initTheme = () => {
		if (typeof window === 'undefined') return;

		// Re-read from localStorage on client mount (fixes SSR hydration)
		const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
		if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
			selectedTheme.value = savedTheme;
		}

		// Update system theme detection
		systemTheme.value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

		// Ensure theme is applied (inline script in app.vue already did this, but ensure consistency)
		applyTheme(resolvedTheme.value);

		// Listen for system theme changes
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e: MediaQueryListEvent) => {
			systemTheme.value = e.matches ? 'dark' : 'light';
			if (selectedTheme.value === 'system') {
				applyTheme(resolvedTheme.value);
			}
		};

		// Modern browsers
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange);
		} else {
			// Fallback for older browsers
			mediaQuery.addListener(handleChange);
		}
	};

	// Initialize on mount
	onMounted(() => {
		initTheme();
	});

	return {
		selectedTheme,
		resolvedTheme,
		setTheme,
		initTheme,
	};
};
