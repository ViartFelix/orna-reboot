<script lang="ts">
import Glide from "@glidejs/glide";
setTimeout(()=>{
  new Glide(".glide").mount();
},100);

export default {
}
</script>

<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <div class="glide__slides">
        <li class="glide__slide">0</li>
        <li class="glide__slide">1</li>
        <li class="glide__slide">2</li>
      </div>
    </div>
  </div>
</template>