import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElContainer,
    ElHeader,
    ElMenu,
    ElSubMenu,
    ElMenuItem

} from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import {createPinia} from 'pinia'

createApp(App)
    .use(createPinia())
    .use(router)
    .use(ElButton) // UI组件库
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElContainer)
    .use(ElHeader)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElSubMenu)
    .mount('#app')
