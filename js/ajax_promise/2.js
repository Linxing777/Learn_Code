// 实例化时，传递函数 里面装耗时性任务 
const p = new Promise((resolve, reject) =>{ // executor 执行器
    console.log('33333333'); // 同步任务
    setTimeout(() => { // 异步任务 event loop
        console.log('1111')
       resolve('BMW325') 
        // reject()
    }, 1000)
})

console.log('44444444', p); // 同步任务
// 异步任务的执行顺序控制的话 用promise
p
 .then((data) => { 
        // 等到executor 执行完了 才会执行twwhen里面的函数
 console.log('22222222') 
 console.log(p);
 console.log(data);
    })
// console.log(222222);
 .catch(() => { // 失败的回调函数 一般不写
    console.log('失败了')
})