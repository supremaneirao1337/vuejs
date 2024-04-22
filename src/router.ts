import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import renderizacaoCondicional from '@/components/RenderizacaoCondicional.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/renderizacao-condicional' },
  { path: '/renderizacao-condicional', component: renderizacaoCondicional }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
