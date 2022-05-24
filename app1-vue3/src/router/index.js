import { createRouter, createWebHistory } from 'vue-router';

import A1_p1 from '../pages/app1.vue';
import A1_p2 from '../pages/app2.vue';

const routes = [
  { path: '/app1-p1', component: A1_p1 },
  { path: '/app1-p2', component: A1_p2 }
]

const router = createRouter({
    history: createWebHistory(),
    base: window.__MICRO_APP_BASE_ROUTE__ || '/',
    routes
})

export default router;