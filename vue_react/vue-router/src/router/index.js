// 路由配置
import { 
    createRouter, //创建路由实例
    createWebHistory // 创建路由模式
} from 'vue-router'// 插件

// 页面级别组件放到views文件中
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostIndex from '../views/post/index/post-index.vue'
import PostShow from '../views/post/show/post-show.vue'
import PostMeta from '../views/post/show/components/post-meta.vue'

// 文章板块 复杂应用
const postRoutes = [
    {
        path:'/posts',
        name:'postIndex',
        component:PostIndex,
        // 路由向页面级别组件传递数据
        props:{
            sort:'popular'
        },
        meta:{
            title:'文章列表' 
        }
    },
    {
        path:'/posts/:postId', // 动态路由
        component:PostShow,
        name:'postShow', // 路由名字
        props:true, // 路由向页面级别组件传递数据
        // 路由嵌套 子路由
        children:[
            {
                path:'meta',
                component:PostMeta
            }
        ]
    },
    
]

// 路由配置
const routes = [
    {
        path: '/', // 路径
        component:Home, // 页面组件名字
        meta:{
            title:'首页' // 路由元信息
        }
    },
    {
        path: '/about',
        meta:{
            requireAuth:true,// 路由元信息
            title:'关于' 
        },
        name: 'about', // 路由名字
        component:About 
    },
    ...postRoutes
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 路由模式
    routes // 路由配置
})

// 路由守卫
// 每次路由切换之前都会执行这个函数
router.beforeEach((to,from,next)=>{
    // to 目标路由对象
    // from 来源路由对象
    document.title = to.meta.title || '东华理工大学';
    if(to.meta.requireAuth){ // 判断是否需要登录
        console.log('需要登录');
        // 跳转到登录页面
        next('/login')
    }
    // next 函数 放行
    next();
})
export default router