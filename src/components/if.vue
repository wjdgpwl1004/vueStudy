<template>
  <div>
    <div v-if="condition > 1" >조건</div>
    <div v-else-if="condition > 2"></div>
  </div>
</template>

<script>
export default {
  name: 'if'
  data() {
    return {
      condition: 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
