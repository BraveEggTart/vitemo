// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Vitemo',
      icon: '',
    },
    component: () => import('../views/home.vue'),
  },
  {
    path: '/nsfw',
    name: 'nsfw',
    meta: {
      title: 'Word check',
      icon: '',
    },
    component: () => import('../views/nsfw.vue'),
  },
];

export default asyncRoutes;