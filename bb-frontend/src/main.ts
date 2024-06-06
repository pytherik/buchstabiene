import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {AppService, AppServiceKey} from "@/services/app.service";
import {RestService} from "@/services/rest.service";

const restService = new RestService();

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide(AppServiceKey, new AppService(restService))

app.mount('#app')
