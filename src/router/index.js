import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../page/home.vue";
import RegisterView from "../page/register.vue";
import BackendView from "../page/backend-view.vue";
import ClubProfileView from "../page/club-profile-view.vue";
import ResumeListView from "../page/resume-list.vue";
import AiHelpView from "../page/ai-help.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/register", component: RegisterView },
  {
    path: "/backend",
    component: BackendView,
    children: [
      { path: "", component: ClubProfileView },
      { path: "resumeList", component: ResumeListView },
      { path: "aiHelp", component: AiHelpView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
