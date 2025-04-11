// http 服务启动
// 内置的http模块
// comminjs node 早期 es6模块化
const http = require('http')

// 启动http服务
//基于请求/响应的简单协议
const users =[
    {
        id: 1,
        name: 'zs'
    },
    {
        id: 2,
        name: 'ls'  
    },
    {
        id: 3,
        name: 'ww'  
    }
]
const server = http.createServer((req, res) => {
    // 异步 高并发
    // req请求解析
    // 拿到资源
    // res响应
    // http结束
   res.end("callback(" + JSON.stringify(users) + ")")
})

server.listen(3000, () => {
    console.log('服务启动成功')
})