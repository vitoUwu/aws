<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Button from "../components/Button.vue";
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";
import Option from "../components/Option.vue";
import { pushQuestionIdToHistory, saveQuestionResult } from "../lib/analytics.ts";
import { getRandomQuestionURL, questions } from "../lib/questions.ts";

const route = useRoute();
const questionId = Number(route.params.questionId as string);
const question = questions[questionId];

const selectedOptions = ref<Set<string>>(new Set());
const openModal = ref(false);
const result = ref<"wrong" | "correct" | null>(null);

function handleSubmit() {
  if (selectedOptions.value.size === 0) {
    return;
  }

  openModal.value = true;

  if (result.value !== null) {
    return;
  }

  if (
    selectedOptions.value.size === question.correctAnswer.length &&
    question.correctAnswer.every((option) => selectedOptions.value.has(option))
  ) {
    result.value = "correct";
  } else {
    result.value = "wrong";
  }

  saveQuestionResult({
    question: question.question,
    isCorrect: result.value === "correct",
  });
  pushQuestionIdToHistory(questionId);
}

function handleOptionClick(option: string) {
  if (question.multiSelect) {
    if (selectedOptions.value.has(option)) {
      selectedOptions.value.delete(option);
      return;
    }

    selectedOptions.value.add(option);
    return;
  }

  selectedOptions.value.clear();
  selectedOptions.value.add(option);
}
</script>

<template>
  <Modal
    v-if="question && result !== null"
    :open="openModal"
    @onClose="openModal = false"
    class="w-full !max-w-[512px]"
  >
    <div class="w-full rounded-lg bg-slate-800 text-slate-300">
      <div class="w-full p-4 text-center rounded-t-lg bg-slate-700">
        <h2 class="text-2xl font-bold">
          {{ result === "correct" ? "🎉 Parabéns!" : "😭 Desculpe" }}
        </h2>
        <p class="font-medium">
          Você {{ result === "correct" ? "acertou" : "errou" }} a questão
        </p>
      </div>
      <div class="p-4 space-y-3" v-if="result === 'wrong'">
        <p class="text-lg font-medium">Opção correta</p>
        <ul class="flex flex-col gap-2">
          <li
            class="flex"
            v-for="option in question.correctAnswer"
            :key="option"
          >
            <Option
              :value="option"
              :isMultiSelect="question.multiSelect"
              :result="result"
              :isSelected="true"
              :isCorrect="true"
              @update:selectedOptions="(value) => selectedOptions.add(value)"
            />
          </li>
        </ul>
      </div>
      <p class="w-full p-4 min-w-96 max-h-[75dvh] overflow-y-auto">
        {{ question.explanation }}
      </p>
      <div class="flex justify-center pb-4 mx-auto mt-5">
        <a
          class="flex items-center justify-center gap-3 px-6 py-1 font-medium transition-all rounded-lg min-h-10 bg-slate-700 hover:bg-slate-600 hover:scale-105 disabled:hover:scale-100 disabled:bg-slate-900 disabled:text-slate-600"
          :href="getRandomQuestionURL(questionId)"
        >
          Próximo
        </a>
      </div>
    </div>
  </Modal>
  <Header class="p-2">
    <Button variant="muted">
      <RouterLink to="/"> Voltar ao inicio </RouterLink>
    </Button>
  </Header>
  <div
    v-if="question"
    class="flex flex-col gap-10 p-6 mx-2 mb-2 rounded-lg bg-slate-800"
  >
    <h1 class="text-3xl font-bold">❔ Questão {{ questionId + 1 }}</h1>
    <p class="text-lg font-medium text-slate-400">
      {{ question.question.split(" ").slice(1).join(" ") }}
    </p>
    <form class="flex flex-col gap-10" @submit.prevent="handleSubmit">
      <ul class="flex flex-col gap-2">
        <li class="flex" v-for="option in question.options" :key="option">
          <Option
            :value="option"
            :isMultiSelect="question.multiSelect"
            :result="result"
            :isSelected="selectedOptions.has(option)"
            :isCorrect="
              result !== null && question.correctAnswer.includes(option)
            "
            @update:selectedOptions="handleOptionClick"
          />
        </li>
      </ul>
      <button
        type="submit"
        :disabled="
          selectedOptions.size === 0 ||
          selectedOptions.size !== question.correctAnswer.length
        "
        class="p-3 font-medium transition-all rounded-lg bg-slate-700 hover:bg-slate-600 hover:scale-105 disabled:hover:scale-100 disabled:bg-slate-900 disabled:text-slate-600"
      >
        {{ result !== null ? "Ver Explicação" : "Responder" }}
      </button>
    </form>
  </div>
  <div
    v-else
    class="flex flex-col items-center justify-center h-32 gap-3 p-6 mx-2 mb-2 text-2xl font-medium rounded-lg bg-slate-800"
  >
    <h1>❌ Questão não encontrada</h1>
    <Button class="text-base">
      <a :href="getRandomQuestionURL(questionId)"> Refazer questão </a>
    </Button>
  </div>
</template>
