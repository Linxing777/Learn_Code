<template>
    <div>
        <p>Mouse X: {{ x }}</p>
        <p>Mouse Y: {{ y }}</p>
    </div>
</template>

<script setup>
import { 
    useMouse,
    useMemo
} from '../hooks/useMouse';
const { x, y } = useMouse(); // 解构赋值 解构鼠标位置 解构鼠标位置
// useMemo();
</script>

<style  scoped>

</style>