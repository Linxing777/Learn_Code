// 路由
import { 
    createRouter, 
    createWebHistory 
} from 'vue-router'



// 路由配置
const routes = [
    { 
        path: '/', 
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta:{
            title:'首页',
            requireLogin:true
        },
        children:[
            {
            path:'about',
            name:'About',
            component: () => import('../views/About.vue'),
            meta:{
                title:'关于',
                requireLogin:true
            }
            }
        ]
    },
    {
        path:'/login',
        name:'Login',
        component:() => import('../views/Login.vue'),
        meta:{
            title:'登录',
            requireLogin:false
        }
    }
]
// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 历史模式
    routes, // 路由配置
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "Linxing"
    // if (to.meta.requireLogin) {
    //   // more  如果能拿到token 就放行
    //   if (localStorage.getItem('token')) {
    //     next()
    //   } else {
    //     next('/login')
    //   }
    //   return
    // }
    next()
  })
// 导出路由实例
export default router