<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  console.log("%cATENÇÃO", "color: red; font-size: 32px; font-weight: bold");
  console.log(
    "%cTentar ver as respostas é feio, você está perdendo seu tempo fazendo isso",
    "color: blue; font-size: 24px; font-weight: bold"
  );
});
</script>

<template>
  <div class="mx-auto min-h-dvh max-w-[512px] select-none">
    <RouterView />
  </div>
</template>
