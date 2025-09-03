import { createApp } from 'vue'
import './index.scss' // main.css yerine index.scss
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')