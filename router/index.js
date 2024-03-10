// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProjectBoard from '../views/ProjectBoard.vue'
import AddTask from '../views/AddTask.vue'

const routes = [
  {
    path: '/',
    name: 'ProjectBoard',
    component: ProjectBoard
  },
  {
    path: '/add-task/:status', // Define a parameter for the status
    name: 'AddTask',
    component: AddTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
