<template>
    <div>
        <h1>CompA</h1>
        <p>Count: {{ count }}</p>
        <button @click="increment">Add</button>
        <CompSubA />
    </div>
</template>

<script setup>
// 引入中央模块
    import { useCounterStore } from '../store/counter';
    import CompSubA from './CompSubA.vue'
    import { toRefs } from 'vue';
    const counterStore = useCounterStore();
    const { count, increment } = toRefs(counterStore);




    
</script>

<style scoped>

</style>