import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
    compact: true,
  },
  dva: {},
  routes: [
    { path: '/login', component: '@/pages/login' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/stage', component: '@/pages/stage' },
        { path: '/skill', component: '@/pages/skill' },
      ],
    },
    { component: '@/pages/404' }
  ],
  fastRefresh: {

  },

});
