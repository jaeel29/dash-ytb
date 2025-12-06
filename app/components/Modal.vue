<template>
	<ClientOnly>
		<Teleport to="body">
			<Transition name="modal">
				<div v-if="modelValue" class="modal-overlay" @click="handleBackdropClick">
					<div
						:class="['modal-container', `modal-${variant}`, `modal-${size}`]"
						@click.stop
						role="dialog"
						aria-modal="true"
					>
						<!-- Close Button -->
						<button v-if="showClose" class="modal-close" @click="close" aria-label="Close modal">
							<Icon name="lucide:x" size="20" mode="svg" />
						</button>

						<!-- Modal Content Slot -->
						<div class="modal-content">
							<slot />
						</div>
					</div>
				</div>
			</Transition>
		</Teleport>
	</ClientOnly>
</template>

<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
	variant: {
		type: String as PropType<'solid' | 'glass' | 'custom'>,
		default: 'solid',
		validator: (value: string) => ['solid', 'glass', 'custom'].includes(value),
	},
	size: {
		type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'full'>,
		default: 'md',
		validator: (value: string) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value),
	},
	closeOnBackdrop: {
		type: Boolean,
		default: true,
	},
	closeOnEsc: {
		type: Boolean,
		default: true,
	},
	showClose: {
		type: Boolean,
		default: true,
	},
});

const emit = defineEmits(['update:modelValue', 'close']);

const close = () => {
	emit('update:modelValue', false);
	emit('close');
};

const handleBackdropClick = () => {
	if (props.closeOnBackdrop) {
		close();
	}
};

// Keyboard event handling
const handleKeydown = (e: KeyboardEvent) => {
	if (e.key === 'Escape' && props.closeOnEsc && props.modelValue) {
		close();
	}
};

onMounted(() => {
	document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
	document.removeEventListener('keydown', handleKeydown);
});

// Prevent body scroll when modal is open
watch(
	() => props.modelValue,
	(isOpen) => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}
);
</script>

<style scoped>
/* Overlay */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	padding: 20px;
	background: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(4px) saturate(0%);
}

/* Container Base */
.modal-container {
	position: relative;
	width: 100%;
	max-height: 90vh;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

/* Variants */
.modal-solid {
	background: var(--bg-primary);
	border: 1px solid var(--border-primary);
}

.modal-glass {
	background: rgba(60, 60, 67, 0.75);
	backdrop-filter: blur(40px) saturate(180%);
	-webkit-backdrop-filter: blur(40px) saturate(180%);
	border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-custom {
	background: transparent;
}

/* Sizes */
.modal-sm {
	max-width: 400px;
	margin: 0 auto;
}

.modal-md {
	max-width: 600px;
	margin: 0 auto;
}

.modal-lg {
	max-width: 800px;
	margin: 0 auto;
}

.modal-xl {
	max-width: 1200px;
	margin: 0 auto;
}

.modal-full {
	max-width: 100%;
	height: 90vh;
}

/* Close Button */
.modal-close {
	position: absolute;
	top: 16px;
	right: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	border-radius: 8px;
	color: rgba(255, 255, 255, 0.7);
	transition: all 0.2s;
	z-index: 10;
}

.modal-close:hover {
	background: rgba(255, 255, 255, 0.1);
	color: rgba(255, 255, 255, 1);
}

.modal-solid .modal-close {
	color: var(--text-secondary);
}

.modal-solid .modal-close:hover {
	background: var(--bg-hover);
	color: var(--text-primary);
}

/* Content */
.modal-content {
	padding: 24px;
	overflow-y: auto;
	max-height: calc(90vh - 48px);
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
	transform: scale(0.95);
	opacity: 0;
}

.modal-enter-to .modal-container,
.modal-leave-from .modal-container {
	transform: scale(1);
	opacity: 1;
}

/* Scrollbar Styling for Glass Variant */
.modal-glass .modal-content::-webkit-scrollbar {
	width: 8px;
}

.modal-glass .modal-content::-webkit-scrollbar-track {
	background: rgba(255, 255, 255, 0.05);
	border-radius: 4px;
}

.modal-glass .modal-content::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.2);
	border-radius: 4px;
}

.modal-glass .modal-content::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.3);
}
</style>
