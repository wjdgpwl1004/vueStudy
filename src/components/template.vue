<template>
  <div class="hello">
    <p>수정불가 : {{msg}}</p>
    <button v-on:click="changeMsg">메시지 변경</button>
    <span>HTMl출력 : <span v-html="realHTML"></span></span>
    <div v-bind:class="dynamic" v-on:click="changeClass">v-bind 동적클래스</div>
    <button v-bind:disabled="isButtonDisabled">Button</button>

    <div v-if="isVisible">보이나요</div>
    <a v-bind:href="URL">이동</a>

    <a v-on:click.prevent="changeMsg">prevent</a>
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      msg: 'Bear',
      realHTML: '<em style="color:red;">test</em>',
      dynamic: 'dynamic_ex1',
      isButtonDisabled: true,
      isVisible: false,
      URL: 'http://www.naver.com'
    }
  },
  methods: {
    changeMsg () {
      this.msg = '뿌뿌'
    },
    changeClass () {
      if (this.dynamic === 'dynamic_ex1') {
        this.dynamic = 'dynamic_ex2'
      } else {
        this.dynamic = 'dynamic_ex1'
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
</style>
