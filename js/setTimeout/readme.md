# 定时器

- JS 是单线程的 只有一个主线程
- setTimeout 是异步执行的 会在主线程执行完后才执行
  callback 函数  event loop  时间ms 

- 一定在指定时间后执行吗?

- 找回？
    执行的是回调函数

- 定时器ID

- 如何使用 setTimeout 实现 setInterval
    - 场景编程题
    - 手写题 fn
        - customSetInterval

        - callback, t参数
        - 递归
        - 用setTimeout 实现
