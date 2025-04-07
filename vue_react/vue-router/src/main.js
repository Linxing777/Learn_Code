import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//自动导入路由对象index.js
import router from './router' // 路由对象

// focus 业务
// vue周边生态

createApp(App) // vue 根组件 ->
    .use(router) // 路由插件 ->
    .mount('#app')// -> 挂载点
