function Person(name, age){
    // console.log(this);
    this.name = name;
    this.age = age;
}
//每个函数都有一个原型对象
Person.prototype = {
    say: function(){
        console.log(this.name, this.age);
    },
    eat:function(){
        console.log(`${this.name}在吃东西`);
    
    }
}

const p1 = new Person('小明', 18)
const p2 = new Person('小红', 19)
p1.eat();