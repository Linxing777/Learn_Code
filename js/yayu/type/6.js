var a = 1.233;
console.log(typeof a, a.toFixed(2)); // number
// a.toFixed保留两位小数后，返回的是字符串
var b = new Number(a);
console.log(typeof b); // object
console.log(b.toFixed(2));
