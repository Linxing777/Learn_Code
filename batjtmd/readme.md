# BATJMD

## WEUI 前端框架


 - 先写结构
  - 总结构 page盒子
  - 上下结构
  - title + desc
  - button
## BEM 国际命名规范
 > 根据页面结构和功能区块命名类名的国际规范
  .weui-cell Block 
  Block 页面由区块构成
  Element 区块由元素构成
  BE 是可以嵌套的
  Modifier 元素由修饰符构成
  
- 页面结构套路  (套路多)
  .page>.page__hd+.page__bd+.page__ft
  - .page Block 块
    -.page__hd Element 元素
    -.page__bd
    
  - .weui-btn
    项目代号 + 元素

- css 源码
  - 模块化
  
