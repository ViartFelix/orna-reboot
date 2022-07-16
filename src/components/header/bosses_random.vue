<script lang="ts">
//10 max
let res=Math.round(Math.random()*9)+1
let link="/bosses_header/"+res+".png";

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