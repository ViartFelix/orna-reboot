<script lang="ts">
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default {
  
}

let i=0;
let name_replacable=[
  "materials",
  "monsters",
  "bosses",
  "raids",
  "pets",
  "consumables",
  "potions",
  "equipments",
];

setInterval(()=>{
  gsap.to(".replacable-gsap",{
    duration: 1,
    text: name_replacable[i],
  });

  i++;
  if(i>=name_replacable.length) {
    i=0;
  }
},5000);
</script>

<template>
  <span class="replacable-gsap">equipments</span>
</template>