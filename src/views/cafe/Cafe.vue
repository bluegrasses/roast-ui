<template>
  <div id="cafe" class="page">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <div class="large-12 medium-12 small-12 cell">
<!--          <loader v-show="cafeLoadStatus === 1" :width="100" :height="100">-->
<!--          </loader>-->

          <div class="cafe-page" v-show="cafeLoadStatus === 2">
            <h2>{{ cafe.name }}</h2>
            <h3 v-if="cafe.location_name !== ''">{{ cafe.location_name }}</h3>

            <div class="grid-x">
              <div class="large-12 medium-12 small-12 cell bg-emerald-300">
                <toggle-like></toggle-like>
              </div>
            </div>

            <span class="address">
                            {{ cafe.address }}<br>
                            {{ cafe.city }}, {{ cafe.state }}<br>
                            {{ cafe.zip }}
                        </span>

            <a class="website" v-bind:href="cafe.website" target="_blank">{{ cafe.website }}</a>

            <div class="brew-methods-container">
              <div class="grid-x grid-padding-x">
                <div class="large-3 medium-4 small-12 cell" v-for="brewMethod in cafe.brew_methods">
                  {{ brewMethod.method }}
                </div>
              </div>
            </div>

            <br>
<!--地图显示-->
            <individual-cafe-map></individual-cafe-map>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
// import Loader from '@/components/global/Loader.vue';
import IndividualCafeMap from '@/components/IndividualCafeMap.vue'
import ToggleLike from '@/components/ToggleLike.vue'
export default {
  name: "Cafe",
  components: {
    // Loader,
    IndividualCafeMap,
    ToggleLike
  },
  created() {
    this.$store.dispatch("cafes/loadCafe", {
      id: this.$route.params.id
    });
  },

  computed: {
    cafeLoadStatus() {
      return this.$store.getters["cafes/getCafeLoadStatus"];
    },
    cafe() {
      return this.$store.getters["cafes/getCafe"];
    },
  }
}
</script>

<style scoped>

</style>