- vue3 响应式
  - ref .value 响应式对象 value Object.defineProperty 性能好
  - reactive 响应式代理 proxy 代理对象 开销大 

  - 父子组件通信
    - props 父传子 数据
    - @child-message="handleMessage"  自定义事件名称
     + 处理函数 attrs
     - 子组件 一切由外界来的 都要申明
    emit 
       const emit = defineEmits(['child-message']);
       emit(event_name, params)

defineProps({
    title: { // 定义属性 title 类型为 String 必须传值
        type: String,
        required: true,
    }
})

  