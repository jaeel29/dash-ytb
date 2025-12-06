export const useKeyboard = (key: string, callback: () => void, options: { metaKey?: boolean; ctrlKey?: boolean; shiftKey?: boolean } = {}) => {
	const { metaKey = false, ctrlKey = false, shiftKey = false } = options;

	const handleKeydown = (e: KeyboardEvent) => {
		const isMetaPressed = metaKey ? e.metaKey || e.ctrlKey : !e.metaKey && !e.ctrlKey;
		const isCtrlPressed = ctrlKey ? e.ctrlKey : !e.ctrlKey;
		const isShiftPressed = shiftKey ? e.shiftKey : !e.shiftKey;

		if (e.key === key && isMetaPressed && isCtrlPressed && isShiftPressed) {
			e.preventDefault();
			callback();
		}
	};

	onMounted(() => {
		document.addEventListener('keydown', handleKeydown);
	});

	onUnmounted(() => {
		document.removeEventListener('keydown', handleKeydown);
	});
};
