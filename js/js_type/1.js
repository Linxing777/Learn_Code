// 栈内存
let a = null;
console.log(a);
// 堆内存
let largeObject ={
    data: new Array(1000000).fill('a')
}

// 释放内存 垃圾回收
largeObject = null;