let obj = {
    name : "111",
    job : "前端开发工程师",
    company: "字节"
  }
  
  obj.hometown = "南昌"
  
  
  let a = 1;
  // 拷贝
  let b = a;
  b = 3;
  // 引用式赋值
  let obj2 = obj;
  
  obj2.name = "2222"
  console.log(a, b);
  console.log(obj, obj2);