<script lang="ts" setup>
defineOptions({
  name: "Card",
});
</script>

<template>
  <div class="flex flex-col gap-3 p-6 rounded-lg bg-slate-800">
    <slot />
  </div>
</template>
