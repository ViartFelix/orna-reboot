<script lang="ts">
let res=Math.round(Math.random()*3)+1
let link="/public/pets/"+res+".png";

export default {
  data() {
    return {
      img_export: link
    }
  },
}
</script>

<template>
  <img :src="img_export">
</template>