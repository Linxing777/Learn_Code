let s = 'hello world';
// 字符串api
let arr = s.split(' ');
console.log(arr);

// es6 展开运算符
// ... 展开运算符 spread 字符串 -> 字符数组
// es6 简洁 让代码简洁 优雅     
let arr2 = [...s];
console.log(arr2);