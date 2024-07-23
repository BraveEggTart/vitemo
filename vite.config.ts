import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
import Markdown from 'unplugin-vue-markdown/vite'
import Prism from 'markdown-it-prism';
import LinkAttributes from 'markdown-it-link-attributes';
import { resolve } from 'path'

const defaultClasses = 'prose prose-sm m-auto text-left';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    VueI18nPlugin({
      include: [resolve(__dirname, './src/locales/**')],
    }),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'pinia', 'vue-router', 'vue-i18n', '@vueuse/core', ],
      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: './src/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ['src/components/'],
      resolvers: [ElementPlusResolver(), IconsResolver(), VueUseComponentsResolver()],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    Markdown({
      wrapperClasses: defaultClasses,
      headEnabled: false,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
        // 为 md 中的所有链接设置为 新页面跳转
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        });
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 把 @ 指向到 src 目录去
    },
  },
  // // 服务设置
  // server: {
  //   host: true, // host设置为true才可以使用network的形式，以ip访问项目
  //   port: 8080, // 端口号
  //   open: true, // 自动打开浏览器
  //   cors: true, // 跨域设置允许
  //   strictPort: true, // 如果端口已占用直接退出
  //   // 接口代理
  //   proxy: {
  //     '/api': {
  //       // 本地 8000 前端代码的接口 代理到 8888 的服务端口
  //       target: 'http://localhost:8888/',
  //       changeOrigin: true, // 允许跨域
  //       rewrite: (path) => path.replace('/api/', '/'),
  //     },
  //   },
  // },
  build: {
    reportCompressedSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    minify: 'esbuild',
    assetsDir: 'static/assets',
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      // 全局引入了 scss 的文件
      scss: {
        additionalData: `
        @import "@/assets/styles/variables.scss";
      `,
        javascriptEnabled: true,
      },
    },
  },
})
