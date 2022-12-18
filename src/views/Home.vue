<template>
  <div>
    <h1>i am Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  created() {
    this.$store.dispatch('loadCafes');
  }
}
</script>
