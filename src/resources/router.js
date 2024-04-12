import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../components/inicio.vue';
import Crud from '../components/crud.vue';

const routes = [
  { path: '/', component: Inicio },
  { path: '/inicio', component: Inicio },
  { path: '/crud', component: Crud },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;