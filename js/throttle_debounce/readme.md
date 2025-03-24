- 认识几个url
    url的设计模式 restful api
    网站时用来暴露资源的 如何将资源暴露出去
  - http://localhost:3001/posts/ 列表页的链接
  - http://localhost:3001/posts/：id id 查询参数  详情页的链接
  - http://localhost:3001/users/：id  用户主页链接

- 数据的查询
- 访问资源的方式
  - apiFox web 请求代理
    Get http://localhost:3001/posts/1
    Patch http://localhost:3001/posts/1
  - 资源 db.json uers posts
  - HTTP 协议
     - Methond(动作 Get | Patch修改 | Post 新增) + url(资源) 请求行
     - 请求头 Cookie   Content-Type:text/json
     - 请求体

  - json-server
    - http 服务
    - db，json 数据资源向外提供访问 CRUD

  - 会设计restful api 接口
    - 需求
      - 新增一篇文章
        http://localhost:3001/posts POST
        {
            请求体
            新增的文章数据
        }
      - 删除文章ID：2
        http://loccalhost:3001/posts/2 EDLETE
      
  - json-server 是一个支持restful api 设计的数据服务器


  - 全栈防抖
    - 前后端分离
      - 前端 live-server 5500
        fetch url
      - 后端 json-server 3001
        接口服务 restful
      - api 接口

  - filter map
    - Array.prototype 上的方法  所有的数组都有
    - filter 过滤 回调函数返回值是否为true 决定元素是否保留
    - map 映射 回调函数返回值 决定元素的映射值 原有数组不能满足需求
    - forEach 遍历 不需要的返回值

  - 防抖
    - 将要执行的函数交给一个debounce高阶函数去优化
    - 减少执行次数 只执行连续输入的最后一次
    - 定时器 本次关掉上次的定时器