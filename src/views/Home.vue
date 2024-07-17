<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import AWS from "../components/icons/AWS.vue";
import Spinner from "../components/icons/Spinner.vue";
import { generateWeeklyReport, type WeeklyReport } from "../lib/analytics";
import { getRandomQuestionURL, questions } from "../lib/questions";

const router = useRouter();

const weekDays: Record<number, string> = {
  0: "Dom",
  1: "Seg",
  2: "Ter",
  3: "Qua",
  4: "Qui",
  5: "Sex",
  6: "Sáb",
};

const reports = ref<WeeklyReport[] | null>(null);
const todayReport = computed(() => reports.value?.[0]);

onMounted(() => {
  reports.value = generateWeeklyReport();
});
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
      <Button @click.prevent="router.replace({ path: getRandomQuestionURL() })">
        Modo Zen
      </Button>
    </div>
    <div
      class="flex flex-col items-center w-full gap-3 p-6 rounded-lg bg-slate-800"
    >
      <template v-if="reports && todayReport">
        <h2 class="text-2xl font-bold">Relatório</h2>
        <div
          class="flex items-center gap-10 text-sm font-medium text-center sm:text-lg text-slate-400"
        >
          <p>
            {{
              todayReport.correctQuestions.count +
              todayReport.wrongQuestions.count
            }}
            questões hoje.
          </p>
          <p>
            {{ todayReport.correctQuestions.percentage }}% de acerto ({{
              todayReport.correctQuestions.count
            }})
          </p>
        </div>
        <div
          class="grid items-center justify-between w-full grid-cols-7 gap-1 mb-4"
        >
          <div
            :key="report.date.getTime()"
            v-for="[index, report] of reports.entries()"
            class="relative w-full h-32 rounded-lg bg-slate-900"
          >
            <div
              class="absolute bottom-0 left-0 right-0 bg-green-500 rounded-lg"
              :style="{ height: `${report.correctQuestions.percentage}%` }"
            />
            <span
              class="absolute text-xs font-bold -translate-x-1/2 bottom-1 left-1/2 text-slate-800 sm:text-sm"
            >
              {{ report.correctQuestions.percentage }}%
            </span>
            <p
              class="font-medium absolute top-[calc(100%+2px)] text-slate-400 left-1/2 -translate-x-1/2 text-xs w-full text-center font-mono"
            >
              {{ index === 0 ? "Hoje" : weekDays[report.date.getDay()] }}
              ({{ report.totalCount }})
            </p>
          </div>
        </div>
      </template>
      <template v-else>
        <Spinner width="64" height="64" />
      </template>
    </div>
  </main>
</template>
