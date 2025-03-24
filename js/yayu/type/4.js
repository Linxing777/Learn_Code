// 基本数据类型的显示类型转换之Number
// Number

console.log(Number()); // 0
console.log(Number(undefined)); 
// NaN undefined 数值上下文中没有转成一个特定的数字的含义
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("123")); // 123
console.log(Number("-123")) // -123
// 16进制
console.log(Number("0x123")); // 291
console.log(Number(""), Number(" ")); // 0
console.log(Number("100a")); // NaN

