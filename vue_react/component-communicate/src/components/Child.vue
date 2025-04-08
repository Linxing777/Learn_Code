<template>
    <div>
        Child
    </div>
</template>

<script setup>
import { defineExpose } from 'vue';
defineExpose(
    { 
        Name:"pys",
        Say(){
            console.log("psy,帅哥");
        }
    }
)
</script>

<style  scoped>

</style>