console.log(1 / + 0) // Infinity 正无穷
console.log(1 / - 0) // -Infinity 负无穷
console.log(Object.is(5, 5));   // true
console.log(Object.is(+0, -0));// false
// 隐式转换
// Nan Not a Number 
console.log(2 * "a", 2 + "a");
console.log(typeof NaN);    // number
console.log(parseInt("abc")); // NaN
console.log(parseInt("123abc")); // 123
console.log(parseInt("abc123")); // NaN
console.log(parseInt("123abc456")); // 123
console.log(parseInt("abc123abc456")); // NaN
// parseInt函数用于将字符串解析为整数。从头开始解析，直到遇到非数字字符为止。
console.log(NaN === NaN); // false  不代表确切值
// 不能通过===NaN 去判断 要用isNaN
console.log(isNaN(NaN), isNaN(parseInt("aasdf"))); // true true



