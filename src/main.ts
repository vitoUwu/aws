import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";
import HomeView from "./views/Home.vue";
import QuestionView from "./views/Question.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/:questionId", component: QuestionView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
