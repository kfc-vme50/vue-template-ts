import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/home',
      meta: {
        title: '首页',
      },
      component: () => import('@views/Home.vue'),
      children: []
    }
  ]
});

export default router;
