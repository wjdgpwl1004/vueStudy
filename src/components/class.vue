<template>
  <div class="hello">
      <div v-text="message" v-bind:class="{active:isActive}"></div>
      <div v-bind:class="classObject"></div>
      <div v-bind:class="[activeClass, noAciveClass]">안녕하세요</div>
  </div>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      message: 'Bear',
      isActive: true,
      classObject: {
        active: true,
        no_active: true
      },
      activeClass: 'active',
      noActiveClass: 'no_active'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dynamic_ex1{
  color:blue;
}
.dynamic_ex2{
  color:pink;
}
.active{
    color:red;
  }
</style>
