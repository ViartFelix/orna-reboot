<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import header_top from './components/header/header.vue';
</script>

<template>
  <header_top/>

  <div class="after-header" id="after-header">
    <router-view></router-view>
  </div>
</template>

<style>
  .after-header {
    margin-top: 104px;
  }
</style>