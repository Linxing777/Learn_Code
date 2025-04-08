<template>
    <div>
        <p>Mouse X: {{ mousePos.x }}</p>
        <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
import {
  reactive,
  onUnmounted,
  onMounted // 生命周期 life cycle
} from 'vue';
// const x = ref(0);
// const y = ref(0);
const mousePos = reactive({
  x: 0,
  y: 0
});

const updateMousePos = (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
  console.log("w s "); 
}

onMounted(() => { 
  window.addEventListener('mousemove', updateMousePos); 
})
onUnmounted(() => { 
  window.removeEventListener('mousemove', updateMousePos); 
})
</script>

<style  scoped>

</style>