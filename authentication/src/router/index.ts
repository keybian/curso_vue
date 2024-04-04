import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from  '../views/AuthView.vue'
import FirebasesView from '../views/FirebasesView.vue'
import SocialView from '../views/SocialView.vue'
import AwsView from '../views/AwsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/auth',
    name:'auth',
    component:AuthView
  },
  {
    path:'/firebases',
    name:'firebases',
    component: FirebasesView
  },
  {
    path: '/social',
    name:'social',
    component: SocialView
  },
  {
    path:'/aws',
    name:'aws',
    component:AwsView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
