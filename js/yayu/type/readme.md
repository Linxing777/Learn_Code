# js 类型转换

- es6 之前
  - 简单数据类型 Primitive 拷贝赋值
  - string
  - number
  - boolean
  - undefined
  - null
  - 复杂类型 引用赋值
  - object

- js类型为什么会改变
  变量的类型 是可以改变的
    - Primitive 类型 -> 其他类型
      - Boolean
    - Object 类型 -> 其他类型


- Boolean 显示类型转换（构造函数）规则
  - false 的情况
    - 为空
    - +0
    - -0
    - NaN
    - null
    - undefined
    - 空字符串


- +0 -0
  Object.is(0, -0) // false
  1/+0 // Infinity
  1/-0 // -Infinity

- NaN
  类型是 number 表示一个特殊的数字 Not a Number


- Number()
  0 1 NaN