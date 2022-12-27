<template>
  <div id="app-layout">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  name: "Layout",
  components: {
    Navigation
  },
  created() {
    // this.$store.dispatch("user/loadUser");
    this.$store.dispatch("cafes/loadCafes");
    // this.$store.dispatch('loadBrewMethods')
  }
}
</script>

<style scoped>

</style>