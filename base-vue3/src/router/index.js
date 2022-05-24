import { createRouter, createWebHistory } from 'vue-router';

import base1 from '../pages/base1.vue';
import base2 from '../pages/base2.vue';

const routes = [
  { path: '/', component: base1 },
  { path: '/base2', component: base2 }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;