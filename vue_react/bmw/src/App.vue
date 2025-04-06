<script setup>
import LifecycleComponent from './components/LifecycleComponent.vue'
import {ref} from 'vue'
const count = ref(0)
const width = ref(100);
const change = () => {
 width.value += 100;
}
const showComponent = ref(true);//
const icrementCount = () => {
 count.value++
}
const toggleComponent = () => {
 showComponent.value = !showComponent.value;
}
</script>

<template>
 <div>
  <button @click="toggleComponent">Toggle Component</button>
  <button @click="icrementCount">Icrement Count</button>
  <p>Count : {{ count }}</p>
  <transition name="fade">
    <LifecycleComponent v-show="showComponent" :count="count"/>
  </transition>
  <div class="box1" :style="{width: width + 'px'}"></div>
  <button @click="change">click</button>
  <!-- vue内置组件 -->
  <transition name="fade">
    <h1 v-if="showComponent">你好</h1>
  </transition>
 </div>
</template>

<style scoped>
.box1 {
 height: 100px;
 background: red;
 transition: width 0.5s ;
}
</style>
