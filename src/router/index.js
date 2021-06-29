import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login/Login.vue')
  },
  {
    path: '/loginSuccess',
    name: 'LoginSuccess',
    component: () => import('../components/Login/LoginSuccess.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/Signup/Signup.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/Profile/Profile.vue')
  },
  {
    path: '/fillteam',
    name: 'FillTeam',
    component: () => import('../components/FillTeam/FillTeam.vue')
  },
  {
    path: '/fillteamresults',
    name: 'FillTeamResutls',
    component: () => import('../components/FillTeam/FillTeamResults.vue')
  },
  {
    path: '/findteam',
    name: 'FindTeam',
    component: () => import('../components/FindTeam/HomePage.vue')
  },
  {
    path: '/fillteamhp',
    name: 'FillTeamHomePage',
    component: () => import('../components/FillTeam/HomePageFT.vue')
  },
  {
    path: '/findteamhp',
    name: 'FindTeamHomePage',
    component: () => import('../components/FindTeam/HomePage.vue')
  },
  {
    path: '/template',
    name: 'Template',
    component: () => import('../components/RightTemplate.vue')
  },
  {
    path: '/createTeam',
    name: 'CreateTeam',
    component: () => import('../components/CreateTeam/CreateTeam.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
