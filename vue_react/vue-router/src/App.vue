<template>
  <div class="page">
    <header class="page-header">
      <h3 class="brand">{{ name }}</h3>
      <nav class="menu">
        <router-link class="menu-item" to="/">主页</router-link>
        <!-- <router-link to="/about">关于</router-link> -->
        <router-link class="menu-item" :to="{name:'about'}">关于</router-link>
        <router-link class="menu-item" :to="{name:'postIndex'}">内容</router-link>
      </nav>
   </header>
   <main class="page-body">
     <router-view />
   </main>
  </div>
</template>

<script  setup>
const name = '东华理工大学';


</script>

<style lang="stylus" scoped>
.page
  padding 32px
.page-header
  display flex
  align-items center
  border-bottom 1px solid #ccc
.brand
  margin-right 32px
  font-size 24px
.menu-item
  display inline-block
  margin 8px
  text-decoration none
  color red
  padding 8px 16px
.page-body
  margin 24px 0
.router-link-active
  color green
  background-color #eee
  border-radius 4px
</style>