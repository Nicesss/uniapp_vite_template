import { createSSRApp } from "vue";
import App from "./App.vue";
import { createI18n } from 'vue-i18n'
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
    return {
        app,
    };
}

