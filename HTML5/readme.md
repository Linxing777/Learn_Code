# html5 代码敲击乐

## 前端是代码界的导演

## 编写静态页面
- 先写html，再写样式
- 职责分离
  link 引入css

- html 是演员
 - 盒子
   div
   html标签
   span 内容
 - 结构
- css 是化妆师
 - 样式
 .keys 类名选择器
 >子元素选择器
 .keys>.key{

 }
 + 相邻兄弟选择器
- 开发效率是第一位
 - emmet 快捷输入
 .keys>.key>div.k+span.suond

 - html标签分两类
  -块级元素 默认独占一行 div等 从上到下
  -行内元素 从左到右 列  span等

- display: flex; 
    弹性布局,子元素在一起
- justify-content: space-between; 水平方式
- align-items: center; 垂直对齐方式

- 盒模型
  border 边框
  padding 内边距
  margin 外边距
  content 内容

  1. <meta charset="UTF-8">
作用：声明网页的字符编码为 UTF-8。
为什么重要：
UTF-8 是一种广泛支持的 Unicode 编码，覆盖几乎所有语言的字符（包括中文、日文、表情符号等）。
确保浏览器正确解析和显示文本内容，避免乱码（如“æ��å��”）。
通常应置于 HTML 文档 <head> 的最顶部，以便浏览器优先处理。

2. <meta name="viewport" content="width=device-width, initial-scale=1.0">
作用：优化移动设备上的视口（viewport）显示。
参数解析：
width=device-width：将视口宽度设为设备屏幕的宽度（如手机竖屏时通常为 375px），而非默认的桌面端宽度（如 980px）。这使网页能自适应不同屏幕尺寸。
initial-scale=1.0：设置初始缩放比例为 1，即不缩放，保持原始尺寸，防止内容被意外缩小。
移动端适配：
没有此标签时，移动浏览器可能以桌面宽度渲染页面，导致用户需手动缩放。
结合 CSS 媒体查询和响应式布局，实现真正的移动友好设计。
遗漏 viewport 的后果：移动端页面可能显示过小，用户需手动缩放，影响体验。
其他参数
maximum-scale=1.0：禁止缩放，但会损害可访问性，不建议使用。
user-scalable=no：同样限制用户缩放，可能不符合无障碍标准。
旧版 iOS 适配：某些情况下需添加 shrink-to-fit=no，但现代浏览器通常无需此设置。
总结：这两个标签是构建现代、多语言、响应式网页的基础，确保内容正确显示且适配各类设备。