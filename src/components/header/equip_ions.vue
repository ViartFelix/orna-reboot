<script lang="ts">
let res=Math.round(Math.random()*23)+1
let link="/equip_header/"+res+".png";

export default {
  data() {
    return {
      img_export: link
    }
  }
}
</script>

<template>
  <img :src="img_export">
</template>