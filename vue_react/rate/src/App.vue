<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppAside from "./components/AppAside.vue";
import AppMain from "./components/AppMain.vue"
// import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="container">
    <AppHeader />
    <div class="flx">
      <AppMain />
      <AppAside />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.flx {
  display: flex;
}
</style>
