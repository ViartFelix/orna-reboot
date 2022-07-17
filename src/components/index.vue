<script lang="ts">

import TextchangeGsap from "./index/text-change-gsap.vue";

export default {
  name: "home",
  components: { TextchangeGsap }
}
</script>

<template>
  <link rel="stylesheet" href="/index/index.css">

  <div class="container main_top">
    <div class="presentation-top">
      <div class="dp-grid">
        <p class="alc"><img src="/index/wt-logo.svg" class="site_logo" alt="Orna guide"></p>
        <h1 class="main_title alc">Orna's handbook</h1>
        <h2 class="second_title alc">A true Orna guide.</h2>
      </div>

      <div class="wrapper_link-down">
        <a href="#description" class="link-down alc"><span class="material-icons md-62">keyboard_double_arrow_down</span></a>
      </div>
    </div>
  </div>

  <section id="description" class="description">
    <div class="container">
      <div class="description-top">
        <h2 class="subtitle subtitle-desc">A complete entry of <TextchangeGsap/> </h2>
      </div>
    </div>
  </section>
</template>