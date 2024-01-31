import './app/styles/index.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/app/providers/router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import App from '@/app/App.vue'

const app = createApp(App)

app.use(createPinia()).use(router).mount('#app')
