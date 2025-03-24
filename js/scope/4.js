// LHS:3 c = .., b = ..., 函数参数赋值 a = ..
// RHS:4 foo()的值 ,  b = a 中a的值, a + b两个的值
function foo(a){
    var b = a;
    return a + b;
}

var c = foo(2);


// ReferenceError: b is not defined
// RHS 查找 失败的时候，会爆出 ReferenceError 错误，报错
function foo(a){
    console.log(a + b);
    b = a;
}
foo(2);

//非严格模式下， 会自动申明全局变量
function foo(){
    b = 2; // LHS 查询 默认申明变量（自动是全局变量）
}

foo();//RHS 调用函数的值

//LHS b 全局
console.log(b);

"use strict"
// 严格模式下， 报错
function foo(){
    b = 2;
}

foo();

console.log(b);

var a = 1;
//
var a // undefined
a = 2; // LHS 赋值 number
a(); // a number  没有 执行操作 TypeError






