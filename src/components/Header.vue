<script setup lang="ts">
defineOptions({
  name: "Header",
});
</script>

<template>
  <nav class="flex items-center w-full gap-10 min-h-10">
    <slot />
  </nav>
</template>
