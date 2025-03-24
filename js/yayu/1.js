// js 造人
let cao = {
    name: '小明'
}
// class es6 类
class People{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log(this.name,this.age);; 
    }
    
}
let p1 = new People('小明',18)
let p2 = new People('小红',19)
let p3 = new People('小绿',20)
let p4 = new People('小蓝',21)