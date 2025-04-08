<template>
    <div>
        <h2>父组件</h2>
        <p>来自子组件的消息:{{ messageFromChild }}</p>
        <ChildComponent @child-message="handleChildMessage" :title="title"/>
    </div>
</template>

<script setup>
// 父子组件通信
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue'; // 导入子组件
const title = ref('父组件标题');
const messageFromChild = ref(''); // 用于接收子组件的消息
// 自定义事件 child-message 父子组件间的约定 子组件调用 子组件调用child-message 告知父组件
const handleChildMessage = (message) => {
    // messageFromChild = message; // 更新父组件的消息
    console.log('来自子组件的消息:', message);
    messageFromChild.value = message; // 更新父组件的消息
}

</script>

<style  scoped>

</style>