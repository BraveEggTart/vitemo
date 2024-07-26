// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/nsfw',
    name: 'nsfw',
    meta: {
      title: 'Word check',
      icon: '',
    },
    component: () => import('@/views/nsfw.vue'),
  },
  {
    path: '/emoji',
    name: 'emoji',
    meta: {
      title: 'Emoji',
      icon: '',
    },
    component: () => import('@/views/emoji.vue'),
  },
  {
    path: '/meme',
    name: 'meme',
    meta: {
      title: 'Meme',
      icon: '',
    },
    component: () => import('@/views/meme.vue'),
  },
];

export default asyncRoutes;