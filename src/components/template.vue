<template>
  <div class="hello">
    <p>수정불가 : {{msg}}</p>
    <button v-on:click="changeMsg">메시지 변경</button>
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      msg: 'Bear'
    }
  },
  methods: {
    changeMsg () {
      this.msg = '뿌뿌'
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
</style>
