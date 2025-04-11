# 跨域

- 运行环境
  - 前端
    V8 引擎在浏览器
  - 后端
    node 封装了 V8 引擎 剥离了html 借用c++ 运行环境
    http 模块 就是node 实现的

- node 的模块化需求
  - 引入各种模块
  - 后端功能复杂
  - MVC model 连数据库  view 页面  controller 业务逻辑 参数校验

- require - >es6 model

- node
  - 后端开发
  - 大前端
  - 简单性能好

- CORS policy
  - 安全策略
  - baidu -> google （不受信任）不同的域名
  - http://127.0.0.1:5500 / js script 跨域
  - http://localhost:3000
    任然被block
  
  - 保护谁
    - 后端 制定规则
      目前没有block
    - 前端
      JS 限制跨域请求
      JS dom 修改页面的 跨域内容受限制

- Cross-Origin Resource Sharing 跨域资源共享
  Origin > Domain > Port > Protocol

## 前后端分离
- vue 开发
- node/java 开发后端
- 开发日常 跨域是常有的

- 换一条路
  - script + src
    - 不受CORS影响
  - http 请求 向后端api 接口资源拿到
    - src = api url
  - json 给我

- script 阻塞式加载并执行
- jsonp
   json with padding(函数)
   - 前端需要script 标签 src 执行 api url
   - 页面上埋下一个全局方法 widow.callback
   - 需要后端配合 数据外面包 函数
- 封装一个 jsonp 函数
  - url + callback
  - dom script 挂载 和 window[callback] = callback