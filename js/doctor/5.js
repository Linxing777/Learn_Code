var a = 1;
function fn(a){
    var a = 2;
    function a(){};
    var b = a;
    console.log(a);
    console.log(b);
}
fn(3);//2
console.log(a);


//调用栈 全局先入栈 fn函数后入  