# 浏览器底层原理

- 云操作系统
 - web 
   chrome 足够强的话 可以根据云服务
 - 阿里云 IP 服务
   一台服务器 虚拟化、容器化（docker）
 - LLM 时代， 云算力资源 共享


- 为什么是Chrome？
 - 主流
   - chrmoe 
   - 国内浏览器 就是chrome 套了一层壳

 - 内核
  - IE 非IE box-sizing 不一样 代码兼容性 PC时代
  - 移动时代？  没有IE
    苹果 webkit 内核
    gogle 基于webkit 开源了 chromium 的浏览器项目 
    chrome时chromium的商业版
    - v8 引擎 + 渲染引擎
    - webkit 分了叉 升级为blink 内核
  
 
 - 架构


- 为什么这么多的进程？
  - 进程 是操作系统的资源分配最小单位
  - 线程 是CPU调度的最小单位
  
  - JS 是单线程的 简单 可靠
  - 多线程 更快

- 并行操作
  - 进程可以启动多个线程
  - 线程可以共享进程中的数据
  - 进程关闭， 回收内存
  - 进程之间相互隔离

- 进程间可以同信吗？
  - 多项 相对比较独立的任务
  下载任务
  - 进程间的通信 IPC

- chrome 进程
  - 浏览器主进程
    负责页面显示 用户交互（事件冒泡、捕获机制）子进程管理（IPC） 储存功能（cookie, localStorage、indexDB） 安全
  - 渲染进程
     排版Webkit Blink + v8 引擎 （JS 单线程  异步）
     A页面打开  B页面也打开 
     每个页面都是一个渲染进程  运行在沙箱之中 操作系统等
     比如 GPS 功能 、 摄像头、 麦克风等 提醒授权
     
  - 插件进程
    flash 
  - GPU进程
    3D渲染 transform : translate3D()
    显卡 显存 GPU加速

- 从输入URL 到页面显示
  - 浏览器要打开 启动4个进程