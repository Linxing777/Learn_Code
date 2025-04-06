<template>
    <div>
        <div>
            <p id="count">Lifecyle Count : {{ count }}</p>
        </div>
    </div>
</template>

<script setup>
import { 
    defineProps, 
    onMounted, 
    onBeforeMount,
    onBeforeUnmount,
    onUnmounted, 
    onBeforeUpdate, 
    onUpdated 
} from 'vue';
defineProps({
    count:{
        type:Number,
        required:true
    }
})

onBeforeMount(() => {
    // 挂载之前
    console.log('Lifecycle Component Before Mounted'); 
    console.log(document.getElementById('count'),'--------')
})
// 组件的生命周期
onMounted(() => {
    // on 某个阶段
    // mounted 挂载阶段
    // 已经挂载完成
    console.log('Lifecycle Component Mounted'); 
    console.log(document.getElementById('count'),'--------')
})

onBeforeUnmount(() => {
    // 卸载之前
    console.log('Lifecycle Component Before Unmounted'); 
})
onUnmounted(() => {
    // 卸载
    console.log('Lifecycle Component Unmounted'); 
})
onBeforeUpdate(() => {
    // 更新之前
    console.log('Lifecycle Component Before Update'); 
})
onUpdated(() => {
    // 更新
    console.log('Lifecycle Component Updated'); 
})
</script>

<style scoped>

</style>