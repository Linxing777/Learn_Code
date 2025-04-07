<template>
    <div>
        About
        <button @click="goHome">回到首页</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter(); // 路由实例 总管
const goHome = () => {
    // js 跳转 BOM API
    // Browser Object Model 浏览器对象模型 > DOM
    // window.location.href = '/'
    router.push('/'); // 编程式导航
}
</script>

<style lang="scss" scoped>

</style>