<template>
    <div>
        CompSubA
        {{ count }}
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
const { count } = toRefs(counterStore);
</script>

<style  scoped>

</style>