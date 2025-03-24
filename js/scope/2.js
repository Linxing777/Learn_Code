// var a = 1;
// var b = 4;
// function foo(){
//     var a = 2;
//     function bar(){
//         var a = 3;
//         return a + b;
//     }
//     console.log(a, b); 
// }
// foo();
function foo(){
    var a = 1;
    // var a 会被忽略
    var a = 2;
    console.log(a);
}
foo();
//  -   存在 → 忽略先前声明保留后面（变量提升机制）
// -   不存在 → 在作用域中创建新变量标识符`a`