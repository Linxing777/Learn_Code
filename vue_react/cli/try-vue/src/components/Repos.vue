<template>
    <div>
        <ul>
            <li v-for="(res, index) in repos" :key="index">{{ res.name }}</li>
        </ul>
    </div>
</template>

<script setup>
const repos = [
       {
        id:1,
        name:"Repo1"
       },
       {
        id:2,
        name:"Repo2"  
       },
       {
        id:3,
        name:"Repo3"                     
       } 
    ]
</script>

<style scoped>

</style>