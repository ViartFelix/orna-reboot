<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import header_top from './components/header/header.vue';
  import axios from "axios";

</script>

<template>
  <header_top/>

  <main class="after-header">
    <router-view></router-view>
  </main>
</template>

<style>
  .after-header {
    position: relative;
    margin-top: 150px;
  }
</style>