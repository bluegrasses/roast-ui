<template>
  <div>
    <div id="cafes">
      <div class="grid-x">
        <div class="large-9 medium-9 small-12 cell">
          <map-container></map-container>
        </div>
        <div class="large-3 medium-3 small-12 cell">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapContainer from "@/components/MapContainer";
export default {
  name: "Cafes",
  components:{
    MapContainer
  }
}
</script>

<style scoped>

</style>