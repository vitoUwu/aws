<script setup lang="ts">
const { open = false } = defineProps({
  open: Boolean,
});

defineOptions({
  name: "Modal",
  inheritAttrs: false,
});

defineEmits(["onClose"]);
</script>

<template>
  <button
    aria-label="Fechar modal"
    @click="$emit('onClose')"
    class="fixed inset-0 z-[9] bg-black/60 opacity-0 transition-all pointer-events-none has-[~[data-open=true]]:opacity-100 has-[~[data-open=true]]:pointer-events-auto"
  />
  <div
    :data-open="open"
    role="dialog"
    v-bind="$attrs"
    class="fixed max-w-full left-1/2 max-h-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 p-4 opacity-0 pointer-events-none transition-all data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto overflow-y-auto"
  >
    <slot />
  </div>
</template>
