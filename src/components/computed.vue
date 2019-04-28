<template>
  <div class="hello">
    <p>원본 메세지: {{message}}</p>
    <p>역순 메세지: {{reversedMessage}}</p>
    <input v-model="data" />
    <button @click="validate">중복검사</button>
    {{isValid ? '중복검사완료':'중복검사를 해주세요.'}}
    <input v-model="computedMessage"/>
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      message: 'Bear',
      data: '초기 데이터',
      isValid: false,
      msg: '기본값'
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    },
    computedMessage: {
      get () {
        return this.msg
      },
      set (newValue) {
        this.msg = newValue + '추가'
      }
    }
  },
  watch: {
    data () {
      this.isValid = false
    }
  },
  methods: {
    validate () {
      this.isValid = true
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
</style>
