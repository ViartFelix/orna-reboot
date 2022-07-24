<script lang="ts">
import data from "../../database/equipements.json";

export default {
  data() {
    return {
      baguette: data
    }
  },
}
</script>

<template>
  <div>
    <table>
      <tr v-for="g in baguette">{{g.id}}</tr>
    </table>
  </div>
</template>