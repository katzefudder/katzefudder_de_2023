import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/index.vue';
import PrivacyPolicy from '@/PrivacyPolicy.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
