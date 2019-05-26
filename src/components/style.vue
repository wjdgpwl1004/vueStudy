<template>
  <div class="hello">
      <div v-bind:style="{color:colorActive}">sss</div>
      <div v-bind:style="styleObj">sss</div>
  </div>
</template>

<script>
export default {
  name: 'style',
  data () {
    return {
      message: 'Bear',
      colorActive: 'red',
      styleObj: {
        color: 'blue',
        fontSize: '20px'
      }
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
