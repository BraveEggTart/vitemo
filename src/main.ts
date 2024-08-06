// i18n
import { createI18n } from 'vue-i18n';
import messages from '@intlify/unplugin-vue-i18n/messages';
import ElementPlus from 'element-plus';
// vue router
import router from './router';
// pinia
import store from './store';
import App from './App.vue';

import 'element-plus/dist/index.css';
import '@/assets/styles/index.scss';

const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.use(ElementPlus);

app.mount('#app');
