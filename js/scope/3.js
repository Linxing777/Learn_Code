var a = 1;
var b = 4;
function foo(){
    // 编译阶段 完成声明， 赋值为undefined
    console.log(a, b);
    // a输出 undefined b输出 4
    //a的声明会被提升到foo函数作用域的顶部，但赋值操作不会。
    // 因此，在foo函数内部，当执行到console.log(a, b);时，a已经被声明但还没有被赋值，所以它的值是undefined。
    // 而变量b是在全局作用域中声明的，它的值为4。在foo函数内部没有重新声明b，所以b引用的是全局作用域中的变量。
    var a = 2;
    function bar(){
        var a = 3;
        return a + b;
    }
    console.log(bar());
    // 3 4
    // 当执行到bar()时，它会在bar函数内部创建一个新的作用域。在这个作用域中，变量a被声明并赋值为3。
}
foo();