<!--喜欢组件-->
<template>
<span class="toggle-like">
  <span class="like cursor-pointer" v-on:click="likeCafe(cafe.id)"
        v-if="!liked && cafeLoadStatus === 2 && cafeLikeActionStatus !== 1 && cafeUnlikeActionStatus !== 1">喜欢</span>
  <span class="un-like cursor-pointer"   v-on:click="unlikeCafe( cafe.id )"
        v-if="liked && cafeLoadStatus === 2 && cafeLikeActionStatus !== 1 && cafeUnlikeActionStatus !== 1">
    取消喜欢
</span>

    <loader v-show="cafeLikeActionStatus === 1 || cafeUnlikeActionStatus === 1"
            :width="30"
            :height="30"
            :display="'inline-block'">
  </loader>
</span>
</template>

<script>
import Loader from '@/components/global/Loader.vue';
export default {
  name: "ToggleLike",
  components: {
    Loader
  },
  computed: {
    // 载入咖啡馆
    cafeLoadStatus() {
      return this.$store.getters["cafes/getCafeLoadStatus"];
    },
    cafe() {
      return this.$store.getters["cafes/getCafe"];
    },

    liked() {
      return this.$store.getters["cafes/getCafeLikedStatus"];
    },

    cafeLikeActionStatus() {
      return this.$store.getters["cafes/getCafeLikeActionStatus"];
    },

    cafeUnlikeActionStatus() {
      return this.$store.getters["cafes/getCafeUnlikeActionStatus"];
    }
  },

  methods: {
    likeCafe(id) {
      this.$store.dispatch("cafes/likeCafe", {
        id: id
      });
    },

    unlikeCafe(cafeID) {
      this.$store.dispatch("cafes/unlikeCafe", {
        id: cafeID
      });
    }
  }
}
</script>

<style scoped>

</style>