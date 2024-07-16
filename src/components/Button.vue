<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  variant: {
    default: "primary",
    type: String as PropType<"primary" | "muted">,
  },
});

defineOptions({
  name: "Button",
});
</script>

<template>
  <button
    :class="{
      'text-slate-400 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-800 disabled:text-slate-500':
        variant === 'muted',
      'text-slate-100 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-900 disabled:text-slate-600':
        variant === 'primary',
    }"
    class="flex items-center justify-center gap-3 px-6 py-1 font-medium transition-all rounded-lg min-h-10 hover:scale-105 disabled:hover:scale-100"
  >
    <slot />
  </button>
</template>
