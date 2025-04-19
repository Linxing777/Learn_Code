
- 如何开发一个vue项目
  - vite 工程化
    npm init vite
  - npm i
  - vue 核心语法 (响应式、组件化、指令)
    前端框架
  - vue-router 路由
  - pinia 状态管理 数据
  - element3 组件库
  - style 样式
  - axios  ajax 网络请求封装库
 
- app.use
  向vue app 中注册插件 生态
  element3 提供的组件可以全局使用
  - 注意问题 性能
    用多了打开就会变慢

## 项目亮点
- 按需加载vue 组件库element 性能优化 页面加载速度
- 项目全面使用es6 风格
  简洁 易读 易维护
  - 良好的注释
  - 良好的git 提交记录和习惯
- 路由
  - 多级路由
    二级路由 path 前面不要 /
  - path component name meta 
  - 路由懒加载
   最佳用户体验是快
   按需加载页面级别组件 import 函数引入方式 () => import('')
  - 路由守卫

  - 表单组件
   - 看文档
   - ：model 收集表单数据
   - ref 获取表单实例
     - 有时候要获取DOM元素
     - 调用相应的方法
     - template 用 ref 标记 DOM | 组件
     - const formRef = ref(null) 挂载前就是null
     - 挂载后就拿到了 
    - 表单的校验
      - rules
      - items prop
      - valid 方法 Boolean 
    
- web 应用登入
 - 会话 session
 - cookie
 - 用户携带身份证明 token
 - {
    ID:1,
    name: 'zs',
    avatar: '---'
 }
 - 登入流程
   - 前端提交登入
   - login.vue 组件化表单
   - 调用api/ login 接口
     - 项目多了一层目录 api 目录会管理应用所有的接口
    - 统一配置的axios 实例发送请求

- 后端验证？
  - mock 模拟下后端
    apifox 跳过前端  模拟post 等请求
    前端mock跳过后端 模拟后端请求

- jwt 登入
  - npm i jsonwebtoken 令牌
  - sign  签发
  - token -> verify 验证 返回用户信息