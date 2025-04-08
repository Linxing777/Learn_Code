<template>
    <div>
        <Child ref="comp"/>
        <button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Child from './Child.vue'; // 导入子组件

const comp = ref(null); // 标记DOM 元素 null 组件没有挂载 DOM不在 

const handlerClick = () => {
    console.log(comp.value.Name);
    comp.value.Say();
}

</script>

<style scoped>

</style>