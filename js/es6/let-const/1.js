// 大厂语法基础题
//局部作用域
function Hello(){
    var name = "pys";
    return "Hello " + name + "!";
}
// var 全局变量
var age = 18;
if(age >= 18){
    // es6 新增的let 变量声明
    var name = "sss";
    let dogYears = age * 7;
    console.log("Your dog is " + dogYears + " years old in dog years!");
    // console.log("You are an adult!");
}
console.log(Hello());