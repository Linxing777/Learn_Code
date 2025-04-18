// 组件就是函数
// 组件首字母大写 复用
// 组件返回的是一个jsx  里面可以写html标签

function App() {
// jsx 
// js函数区域 里面编写html
  let myTitle = <h1>Bonjour</h1>;

  return (
    // <div>
    //   {myTitle}
    // </div>
    // JSX 最外层 只能有且必须有一个根标签
    <>
      <p>hello</p>
      <p>world</p>
    </>
    
  )
}

export default App
