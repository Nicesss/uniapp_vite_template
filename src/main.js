import { createSSRApp } from "vue";
import { createI18n } from 'vue-i18n'
import uviewPlus from 'uview-plus'
import App from "./App.vue";
import messages from '@/locale'
import request from './utils/request'

const i18n = createI18n({
    locale: 'zh',
    messages
});

export function createApp() {
    const app = createSSRApp(App);
    app.config.globalProperties.$request = request;
    app.use(i18n);
    app.use(uviewPlus)
    return {
        app,
    };
}

