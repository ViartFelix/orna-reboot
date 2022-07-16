<script lang="ts">
import main_logo from "./main_logo.vue"
import pets_random from "./pets_icons.vue"
import equip_random from "./equip_ions.vue"
import monsters_random from "./monsters_icons.vue"
import bosses_random from "./bosses_random.vue"
import materials_random from "./materials_random.vue"
import consumables_random from "./consumables_random.vue"
import potions_random from "./potions_random.vue"

export default {
  components: {
    main_logo,
    pets_random,
    equip_random,
    monsters_random,
    bosses_random,
    materials_random,
    consumables_random,
    potions_random,
  },
  data() {
    return {
      state_link: 0
    }
  }
}
</script>

<template>
<header class="main_header">
  <div class="header_wrapper">
    <nav class="header_nav">
      <router-link to="/" class="header-link" title="Home"><p><main_logo :state="state_link" class="main_logo"/>Home</p></router-link>
      <router-link to="/equipments" class="header-link" title="Equipements"><p><equip_random class="header_logo"/><br/>Equipments</p></router-link>
      <router-link to="/materials" class="header-link" title="Materials"><p><materials_random class="header_logo"/><br/>Materials</p></router-link>
      <router-link to="/monsters" class="header-link" title="Monsters"><p><monsters_random class="header_logo"/><br/>Monsters</p></router-link>
      <router-link to="/bosses" class="header-link" title="Bosses and raids"><p><bosses_random class="header_logo"/><br/>Bosses/Raids</p></router-link>
      <router-link to="/pets" class="header-link" title="Pets"><p><pets_random class="header_logo"/><br/>Pets</p></router-link>
      <router-link to="/consumables" class="header-link" title="Consumables"><p><consumables_random class="header_logo"/><br/>Consumables</p></router-link>
      <router-link to="/potions" class="header-link" title="Potions"><p><potions_random class="header_logo"/><br/>Potions</p></router-link>
    </nav>
  </div>
  <div class="dpnone">{{$route.path=="/" ? state_link=1:state_link=0}}</div>
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
    margin: 0 20px;
  }

  header.main_header nav {
    display: flex;
    align-items: center;
  }

  header.main_header a {
    padding: 10px 20px;
    filter: brightness(0.6);
    transition: all 0.3s ease-in-out;
  }

  header.main_header a:hover {
    filter: brightness(1);
  }

  header.main_header nav svg, header.main_header nav img {
    height: var(--headerheight);
  }

  header.main_header .header-link {
    text-align: center;
    color: var(--textcolor);
    text-decoration: none;
    font-weight: 700;
  }

  header.main_header [aria-current="page"] {
    filter: brightness(1);
    background-color: #fff;
    color: var(--colormain);
  }

  header.main_header .header_logo {
    image-rendering: crisp-edges;
  }

  header.main_header .dpnone {
    display: none;
  }
</style>