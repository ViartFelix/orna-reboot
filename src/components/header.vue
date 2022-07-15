<script lang="ts">
import main_logo from "./header/main_logo.vue";
import pets_random from "./header/pets_icons.vue";

export default {
  components: {
    main_logo,
    pets_random
  }
}
</script>

<template>
<header class="main_header">
  <div class="header_wrapper">
    <nav class="header_nav">
      <router-link to="/" class="header-link"><p><main_logo class="main_logo"/>Home</p></router-link>
      <router-link to="/pets" class="header-link"><p><pets_random class="pets_logo"/><br/>Pets</p></router-link>
      {{$router.name=="/" ? "oui":"non"}}
    </nav>
  </div>
</header>
</template>

<style lang="css">
  header.main_header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: var(--header_BG);
    z-index: 9999;
  }

  header.main_header .header_wrapper {
    padding: 10px 0;
    margin: 0 20px;
  }

  header.main_header nav {
    display: flex;
    align-items: center;
  }

  header.main_header a {
    padding: 2px 5px;
  }

  header.main_header a:not(:first-child/*, :last-child*/) {
    margin: 0 25px;
  }

  header.main_header nav svg, header.main_header nav img {
    height: var(--headerheight);
  }

  header.main_header .header-link {
    text-align: center;
    color: var(--textcolor);
    text-decoration: none;
  }

  header.main_header [aria-current="page"] {
    background-color: #fff;
  }
</style>