import { defineConfig } from 'umi';

const pxToViewPort = require('postcss-px-to-viewport');
export default defineConfig({
  define: {
    FOO: 'bar',
  },
  esbuild: {},
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  antd: {
    dark: false,
    compact: true,
  },
  targets: {
    ie: 11,
  },
  dva: {
    hmr: true,
  },
  mfsu: {},
  webpack5: {},
  // exportStatic: {},
  ignoreMomentLocale: true,
  extraPostCSSPlugins: [
    pxToViewPort({
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 375, // 视窗的宽度，可根据自己的需求调整（这里是以PC端为例）
      viewportHeight: 667, // 视窗的高度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      // exclude: [/node_modules/], 	// 设置忽略文件，用正则做目录名匹配
      landscape: false,
    }),
  ],
  routes: [
    // {
    //   path: '/login',
    //   component: '@/pages/login',
    //   title: '登录',
    // },
    { path: '/', component: '@/pages/index', title: '首页' },
    // {
    //   path: '/',
    //   component: '@/layouts/home',
    //   routes: [
    //     { path: '/stage', component: '@/pages/stage' },
    //     { path: '/skill', component: '@/pages/skill' },
    //     { component: '@/pages/404' },
    //   ],
    // },
    { component: '@/pages/404' },
  ],
  fastRefresh: {},
});
