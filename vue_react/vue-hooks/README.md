# vue hooks 编程

- react 的 hooks 编程 vue直接抄
-vue 功能 ->  组件思维

- 内存泄漏
  不会主动取消事件监听  组件销毁 事件处理函数无法被回收
- 生命周期 v-if 组件卸载前打扫内存战场

- es6 模块化
  - import from 引入
    import Obj from export default 默认输出的对象
    import {a, b} export 导出的对象
  - export  导出

- hooks 编程风格
  - 函数式编程
    useMouse use 开头 hooks 函数的特征
    - 将响应式业务 和 UI 分离
    - 组件更好维护 复用