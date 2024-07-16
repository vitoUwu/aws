<script lang="ts" setup>
import Button from "../components/Button.vue";
import AWS from "../components/icons/AWS.vue";
import { generateWeeklyReport } from "../lib/analytics";
import { getRandomQuestionURL, questions } from "../lib/questions";

const reports = generateWeeklyReport();
const todayReport = reports[0];

const weekDays: Record<number, string> = {
  0: "Domingo",
  1: "Segunda",
  2: "Terça",
  3: "Quarta",
  4: "Quinta",
  5: "Sexta",
  6: "Sábado",
};
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full gap-2 p-2">
    <div class="flex flex-col items-center gap-3 p-6 rounded-lg bg-slate-800">
      <AWS width="64" height="64" />
      <h1 class="flex items-center justify-center gap-3 text-3xl font-bold">
        AWS Quiz
      </h1>
      <p class="text-lg font-medium text-slate-400">
        Teste seus conhecimentos em AWS com cerca de
        {{ questions.length }} questões.
      </p>
      <Button>
        <RouterLink :to="getRandomQuestionURL()"> Começar </RouterLink>
      </Button>
    </div>
    <div
      class="flex flex-col items-center w-full gap-3 p-6 rounded-lg bg-slate-800"
    >
      <h2 class="text-2xl font-bold">Relatório</h2>
      <div class="flex items-center gap-10">
        <p class="text-lg font-medium text-slate-400">
          {{
            todayReport.correctQuestions.count +
            todayReport.wrongQuestions.count
          }}
          questões hoje.
        </p>
        <p class="text-lg font-medium text-slate-400">
          {{ todayReport.correctQuestions.percentage }}% de acerto ({{
            todayReport.correctQuestions.count
          }})
        </p>
      </div>
      <div class="flex items-center justify-between gap-3">
        <div
          :key="report.date.getTime()"
          v-for="[index, report] of reports.entries()"
          class="relative w-10 h-32 rounded-lg bg-slate-900"
        >
          <div
            class="absolute bottom-0 left-0 right-0 bg-green-500 rounded-lg"
            :style="{ height: `${report.correctQuestions.percentage}%` }"
          />
          <span
            class="absolute text-sm font-bold -translate-x-1/2 bottom-1 left-1/2 text-slate-800"
            >{{ report.correctQuestions.percentage }}%</span
          >
          <p
            class="font-medium absolute top-[calc(100%+44px)] left-0 rotate-45 text-start w-[120px]"
          >
            {{
              index === 0
                ? "Hoje"
                : index === 1
                ? "Ontem"
                : weekDays[report.date.getDay()]
            }}
            ({{ report.totalCount }})
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
