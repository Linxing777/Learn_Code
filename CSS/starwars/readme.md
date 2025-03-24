- <!DOCTYPE html>
  html5 版本申明头
- *
  css 通配符， 所有元素
  margin: 0 padding: 0 所有元素初始化一致
  由于有不同的浏览器，默认值不一样
  需要在页面样式开始之前，做一个样式reset统一初始化， 让任何浏览器访问，我们的页面都是一致的
  在所有的浏览器体验上一致 

  *性能不太好，所以我们宁愿列出来所有的标签

  - 居中
    - 绝对定位 position: absolute;
      - 百分比相对于父元素
    - transform 变基属性
      - translate 移动
        x 左移 负 右移 正
        y 上移 负 下移 正
    - 背景大法
      盒子在页面的位置会显示出来
      
    -css 动画
      - animation
      - keyframes
      - transform scale translateY
      - 飞船模拟动画
      - 1% 时间差 点睛之笔
      - transform-style: preserve-3d; 3d效果
        perspective: 800px; 视点， 眼睛离屏幕的距离
    
    - inline 元素不支持transform（只支持块级元素）， 需要设置display: inline-block;
      