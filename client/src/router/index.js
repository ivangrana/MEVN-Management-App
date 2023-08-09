import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import NotesView from '../views/NotesView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
