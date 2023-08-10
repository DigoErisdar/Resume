import './app/styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'
import router from '@/app/providers/router'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
