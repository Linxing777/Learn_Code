<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <p>{{ state.name }}</p>
    <p>{{ state.age }}</p>
    <button @click="updateState">更新</button>
  </div>
</template>

<script setup>
// composition API 组合API
import{
  ref,// 简单数据类型
  reactive// 复杂数据类型
} from 'vue'

// 组合API  count 计数业务
const count = ref(0) // 简单数据类型
const increment = () => {
  count.value++;// 直接操作
}

// user form 对象数据
const state = reactive({
  name: '张三',
  age: 18
}) // 复杂数据类型
const updateState = () => {
  state.name = '李四'
  state.age++;
}
</script>

<style  scoped>

</style>