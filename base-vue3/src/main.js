import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';

// 基座应用入口引入micro-app
import microApp from '@micro-zoe/micro-app';
microApp.start()


createApp(App).use(router).mount('#app')
