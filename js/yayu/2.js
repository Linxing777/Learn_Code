//构造对象的过程  构造函数 constructor
const pys = {
    name: 'pys',
    playBasketball: function(){
       console.log('打篮球'); 
    }
}
Person.prototype = pys;
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person('小明', 18)// 普通函数调用
const p1 = new Person('小明', 18)// 构造函数方运行
const p2 = new Person('小红', 19)

p1.playBasketball(); 