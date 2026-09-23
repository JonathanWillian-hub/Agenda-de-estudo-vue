import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tarefas from '../views/Tarefas.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
