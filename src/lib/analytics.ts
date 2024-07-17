const HISTORY_KEY = "history";

interface Data {
  question: string;
  isCorrect: boolean;
}

function generateReport(data: Data[]): Report {
  const wrongQuestionsCount = data.filter(({ isCorrect }) => !isCorrect).length;
  const wrongQuestionsPercentage =
    data.length === 0
      ? 0
      : Math.round((wrongQuestionsCount / data.length) * 100);
  const correctQuestionsCount = data.filter(
    ({ isCorrect }) => isCorrect
  ).length;
  const correctQuestionsPercentage =
    data.length === 0 ? 0 : 100 - wrongQuestionsPercentage;

  return {
    wrongQuestions: {
      count: wrongQuestionsCount,
      percentage: wrongQuestionsPercentage,
    },
    correctQuestions: {
      count: correctQuestionsCount,
      percentage: correctQuestionsPercentage,
    },
    totalCount: data.length,
  };
}

interface Report {
  wrongQuestions: {
    count: number;
    percentage: number;
  };
  correctQuestions: {
    count: number;
    percentage: number;
  };
  totalCount: number;
}

export interface WeeklyReport extends Report {
  date: Date;
}

export function generateWeeklyReport(): WeeklyReport[] {
  const storage = Object.entries({ ...window.localStorage });
  const date = new Date();
  const reports: (Report & { date: Date })[] = [];
  for (let i = 0; i < 7; i++) {
    const today = new Date(date.getTime() - i * 24 * 60 * 60 * 1000);
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const todayData = JSON.parse(
      storage
        .filter(
          ([key]) =>
            key ===
            `2024-${month}-${today.getDate().toString().padStart(2, "0")}`
        )
        .map(([_, value]) => value)[0] ?? "[]"
    ) as Data[];

    reports.push({
      date: today,
      ...generateReport(todayData),
    });
  }

  return reports;
}

export function saveQuestionResult(question: Data) {
  const today = new Date();
  const pad = (num: number) => num.toString().padStart(2, "0");
  const key = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(
    today.getDate()
  )}`;
  const results = localStorage.getItem(key) ?? "[]";

  try {
    const parsedResults = JSON.parse(results) as Data[];
    parsedResults.push(question);
    localStorage.setItem(key, JSON.stringify(parsedResults));
  } catch {
    localStorage.setItem(key, JSON.stringify([question]));
  }
}

export function pushQuestionIdToHistory(questionId: number) {
  const history = getHistory();
  history.unshift(questionId);
  saveHistory(history.slice(0, 10));
}

function saveHistory(history: number[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export function getHistory(): number[] {
  const history = localStorage.getItem(HISTORY_KEY) ?? "[]";

  try {
    return JSON.parse(history) as number[];
  } catch {
    return [];
  }
}
