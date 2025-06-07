import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

import { createPinia } from 'pinia'

// createApp(App).mount('#app')
const app = createApp(App)

// 导入pinia
const pinia = createPinia()
// 使用路由
app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')

