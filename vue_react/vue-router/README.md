# vue 全家桶之 vue-router 路由

- vue 语法、组件、响应式、生命周期、指令（v-bind、v-model、v-for、v-if
v-show） 三种数据（ref、props、computed）

- vue-router 路由 （路由懒加载、路由守卫、路由模式）
  - 跳转到其他页面 路由
  
- vuex/pinia 状态管理


## vue-router
- 将接管路由
- router-link 取代a标签
  a 标签
  router-link 组件包含a的功能 路由对应的组件显示到相应的位置
  要启用
  组件没有生效 无法识别的组件 -> div 元素、
  - 向vue 添加vue-router

- router 专门的目录
  - index.js 入口配置文件
  - router-link 是vue-router提供的组件，use（router）就可以使用

- 业务熟练度
  - vue-router 语法细节
    - routes 拆分 亮点
    [
        /
        /about 顶级路径
        ...users // 用户模块
        ...posts // 文章模块
    ]
    展开运算符
    - path,component
      -name 
      -props 路由传参

- 路由历史记录 history
  router-link 而不是a 组件
  router.push() 入栈
  栈顶是当前的路由，显示组件
  前进 后退
  导航 = url + history navigator

- 实战开发
  -stylus
   加速css
   npm i -D stylus 当前项目安装包
   省略：{} 