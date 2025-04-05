- es6 promise
  Promise 类， 专门解决异步耗时性问题, 执行流程可控 
  其他大型语言是同步的， js通过es6 promise 解决了 单线程 异步不好控制的问题
  promise 让异步变同步 提供了完善解决异步任务的机制
  - 口袋 装耗时性的内容 executor 立即执行
    - resolve、reject 两个函数参数
    - resolve 成功解决 promise 状态 成功 then执行
    - reject 失败 promise 状态 失败 catch 执行
 
  - then方法 等他完成之后
    resovle(data) 后执行回调函数 data 传给回调函数
  - catch 方法
    reject(error) 后执行回调函数 error 传给回调函数
  - 三种状态
    - pending 等待 实例化后 resolve 或 reject 之前的状态
    - fulfilled成功 resolve 后状态 得从 pending 变为 fulfilled
    - rejected 失败 reject 后状态 得从 pending 变为 rejected
    
    promise 诺言 状态只会从 pending 变为 fulfilled 或 rejected  不会变了