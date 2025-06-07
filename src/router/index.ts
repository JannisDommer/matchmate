import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GroupView from '../views/GroupView.vue'
import TournamentView from '../views/TournamentView.vue'
import ResultView from "@/views/ResultView.vue";
import BracketView from "@/views/BracketView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultView,
    },
    {
      path: '/tournaments',
      name: 'tournaments',
      component: TournamentView,
    },
    {
      path: '/bracket',
      name: 'bracket',
      component: BracketView,
    }
  ],
})

export default router
