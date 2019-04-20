<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-bind:title="msg2">dd</p>
    <span v-if="seen">22</span>
    <ul>
      <li v-for="candy in candies" v-bind:key="candy">
        {{candy.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloVue2',
  data () {
    return {
      msg: 'Bear',
      msg2: '준영이눙 바부당',
      seen: true,
      candies: [
        {text: '준영몽'},
        {text: '내꺼'},
        {text: '바람피면'},
        {text: '죽어'}
      ]
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
