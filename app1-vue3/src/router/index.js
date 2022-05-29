import {
  createRouter,
  // createWebHashHistory,
  createWebHistory
} from 'vue-router';

import A1_p1 from '../pages/app1.vue';
import A1_p2 from '../pages/app2.vue';

const routes = [
  { path: '/app1-p1', component: A1_p1 },
  { path: '/app1-p2', component: A1_p2 }
]

const router = createRouter({
  // hash 模式直接使用
  // history: createWebHashHistory(),
  
  // TODO history 模式刷新会导致路由匹配不到
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL),
  routes
})

export default router;