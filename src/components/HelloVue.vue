<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-bind:title="message">22</p>
    <p v-if="like">좋아요 눌러랑</p>
    <ol>
      <li v-for="drink in drinks">
        {{ drink.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bear',
      message: '이 페이지눙'+new Date(),
      like: false,
      drinks: [
        { text: '콜라' },
        { text: '사이다' },
        { text: '밀키스'}
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
