import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LottoMainView',
    component: () => import(/* webpackChunkName: "lottomainview" */ '../views/LottoMainView.vue')
  },
  {
    path: '/rsp',
    name: 'RspMainView',
    component: () => import(/* webpackChunkName: "RspMainView" */ '../views/RspMainView.vue')
  },
  {
    path: '/board',
    name: 'BoardMainView',
    component: () => import(/* webpackChunkName: "BoardMainView" */ '../views/BoardMainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router