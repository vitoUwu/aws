<script setup lang="ts">
defineProps<{
  value: string;
  isMultiSelect: boolean;
  result: string | null;
  isSelected: boolean;
  isCorrect: boolean;
}>();

defineEmits<{
  (e: "update:selectedOptions", value: string): unknown;
}>();

defineOptions({
  name: "Option",
});
</script>

<template>
  <input
    :id="value"
    :name="isMultiSelect ? value : 'option'"
    @click="$emit('update:selectedOptions', value)"
    :type="isMultiSelect ? 'checkbox' : 'radio'"
    :value="value"
    class="hidden peer"
    :disabled="result !== null"
  />
  <label
    :class="{
      'bg-green-500 text-slate-800 font-medium':
        result !== null && isCorrect && isSelected,
      'bg-blue-500 text-slate-100 font-medium':
        result !== null && isCorrect && !isSelected,
      'bg-red-500 text-slate-100 font-medium':
        result !== null && !isCorrect && isSelected,
      'bg-slate-900 text-slate-600':
        result !== null && !isSelected && !isCorrect,
      'peer-checked:bg-slate-300 peer-checked:text-slate-800 text-slate-300 bg-slate-700 hover:bg-slate-600 hover:scale-105 peer-disabled:hover:scale-100 peer-disabled:hover:bg-slate-700 peer-disabled:peer-checked:bg-slate-300 peer-disabled:peer-checked:text-slate-800 cursor-pointer':
        result === null,
    }"
    class="w-full p-3 font-medium transition-all rounded-lg"
    :for="value"
  >
    {{ value }}
  </label>
</template>
