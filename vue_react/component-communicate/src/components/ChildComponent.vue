<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="sendMessageToParent">发送消息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps,
    ref,
    defineEmits
} from 'vue';

const childMessage = ref('Hello from ChildComponent');

const emit = defineEmits(['child-message']); // 定义子组件的自定义事件 子组件调用child-message 告知父组件

defineProps({
    title: { // 定义属性 title 类型为 String 必须传值
        type: String,
        required: true,
    }
})

const sendMessageToParent = () => {
    emit('child-message', childMessage.value); // 触发自定义事件 child-message 并传递消息给父组件 
}


</script>

<style  scoped>

</style>