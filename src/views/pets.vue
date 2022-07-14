<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import header_top from '../components/header/header.vue';
  import index_pets from '../components/pets/index.vue';
</script>

<template>
  <header_top/>
  <index_pets/>
</template>