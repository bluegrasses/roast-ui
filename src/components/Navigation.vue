<template>
  <nav class="flex">
    <div class="">
      <router-link :to="{ name: 'home'}">
        <span class="logo">Roast</span>
      </router-link>
    </div>

    <ul class="">
      <li>
        <router-link :to="{ name: 'cafes' }">
          Cafes
        </router-link>
      </li>
    </ul>
    <div class="right">
      <img class="avatar" :src="user.avatar" v-show="userLoadStatus == 2"/>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  computed:{
    userLoadStatus() {
      return this.$store.getters['user/getUserLoadStatus'];
    },
    user() {
      return this.$store.getters['user/getUser'];
    }
  }
}
</script>

<style scoped>
 .avatar {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   margin-right: 10px;
 }
</style>