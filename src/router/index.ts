import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: () => import('../views/ContactUsView.vue'),
  },
  {
    path: '/faqView',
    name: 'faqView',
    component: () => import('../views/FaqView.vue'),
  },
  {
    path: '/ourSpacesView',
    name: 'ourSpacesView',
    component: () => import('../views/OurSpacesView.vue'),
  },
  {
    path: '/adminPage',
    name: 'adminPage',
    component: () => import('../components/AdminPageComponents/AdminPage.vue'),
  },
  {
    path: '/usersList',
    name: 'usersList',
    component: () => import('../components/AdminPageComponents/UsersList.vue'),
  },
  {
    path: '/entitiesList',
    name: 'entitiesList',
    component: () => import('../components/AdminPageComponents/EntitiesList.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
