<template>
  <div id="home">
    <p>计算属性:{{cafesLoadStatus}}</p>
    <span v-show="cafesLoadStatus == 1">Loading</span>
    <span v-show="cafesLoadStatus == 2">Cafes loaded successfully!</span>
    <span v-show="cafesLoadStatus == 3">Cafes loaded unsuccessfully!</span>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('cafes/loadCafes');
    },
  computed: {
    cafes() {
      return this.$store.getters['cafes/getCafes'];
    },
    cafesLoadStatus() {
      return this.$store.getters['cafes/getCafesLoadStatus'];
    },
  },
}
</script>
