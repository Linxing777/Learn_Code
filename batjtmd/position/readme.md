# 百度面试题

## 文档(document 顺序)流 （从上到下，块级 从左到右  行内）
 - document html 文档
    网页结构
    页面绘制的本质
 - 按文档流绘制 box1
   盒子的顺序  文档流
   精确计算盒子的大小  = 内容（width * height） + paddiing + border
   盒子的位置  再原来的位置上给 margin间距 给位置定位

## position
 - relative  相对定位
    - 常用于微调元素的位置，或者作为绝对定位元素的参考容器。适合文档流 
    - 相对默认的位置  移动 left top... 
    - 盒子原来的位置（文档流的位置） 不受影响
 - absolute  绝对定位
   -常用于创建浮动元素、弹出框、菜单等，脱离文档流
   - 绝对定位会离开文档流
   - 找到最近的  祖先有定位节点的元素
     如果没有找的到  就找body 定位

