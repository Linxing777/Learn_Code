// js 是一切皆对象 面向对象的
"123".length;
console.log(typeof "123");
console.log("123".length);
let arr = [1,2,3,4,5];
arr.customProperty = 'hello';
console.log(arr.customProperty);
arr.push(6);
arr.forEach(function(element){
    console.log(element);
});

