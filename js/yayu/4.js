
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.name = 'pys';
Person.prototype.hometown = '山东';
let Person1 = new Person('12', 45);
let Person2 = new Person('124', 45);
console.log(Person1 === Person2);
console.log(Person1.name, Person2.name); 
