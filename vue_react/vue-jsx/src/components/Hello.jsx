// vue 中使用jsx
import { 
    defineComponent, // 申明组件函数
    h
 } from 'vue'

 export default defineComponent({ // 定义组件
    name: 'HelloJSX', // 组件名称

    props: { // 组件属性
        msg: String
    },
    setup(props) { // 组件配置项
        return () => { // 组件渲染函数
             // 组件渲染内容
             return (
                <div>
                    <h1>Hello</h1>
                    <h1>{props.msg}</h1>
                </div>
             )
        }
    }

 })