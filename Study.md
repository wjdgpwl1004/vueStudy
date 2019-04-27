# Vue Study 
> (2019.03.03)
- template
    - router를 사용하여 보여줄 템플릿을 정의한다. 

- data
    - template 내부에서 사용할 데이터를 정의한다.

- {{ }}
    - template내부에서 출력하는 방식이다.

- v-bind="변수명"
    - 특정 속성과 바인딩 하는 역할을 한다.

- v-if="변수명"
    - 해당 변수의 논리값을 판단하여 해당 태그를 보여준다.

- v-for="변수명 in list변수명"
    - 해당 변수의 리스트를 반복하여 출력한다.

```
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
```
# 사용자입력핸들링
- v-on:이벤트명="함수명"
  - 해당 이벤트에 메서드를 바인딩하여 호출한다.

- v-model="data변수명"
 - 해당 변수에 해당하는 모델을 양방향으로 바인딩한다.

 # 템플릿문법
 - 보간법
  - 문자열
    - 데이터 바인딩의 가장 기초적인 형태는 Mustache {{ }} 를 활용한 텍스트 보간이다.

```
<template>
  <div class="hello">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      msg: 'Bear'
    }
  }
}
</script>
```
# 원시HTML
- Mustache태그는 해당하는 데이터를 HTML이 아닌 일반 텍스트로 데이터를 해석한다. 
- 실제 HTML을 출력하려면 v-html디렉티브를 사용해야 한다.
- span태그의 내용은 realHTML으로 대체된다. 
- 이떄 데이터 바인딩은 무시된다.
- Vue는 문자열 기반 템플릿엔진이 아니기때문에 v-html을 통해 템플릿 사용이 불가하다.
- 웹사이트에서 임의의 HTML을 동적으로 랜더링하면 XSS취약점이 발생하므로 지양해야한다.

```
<span>HTMl출력 : <span v-html="realHTML"></span></span>

<script>
export default {
  name: 'template',
  data () {
    return {
      msg: 'Bear',
      realHTML: '<em style="color:red;">test</em>'
    }
  },
  methods: {
    changeMsg () {
      this.msg = '뿌뿌'
    }
  }
}
</script>
```
# 속성
- Mustache는 HTML속성에서 사용할 수 없다. 대신 v-bind:속성을 사용해야 한다.
- v-bind:class로 인해 dynamicClass모델과 바인딩되고, v-on:click이벤트 발생시 div의 클래스 속성이동적으로 변한다.

- boolean값을 이용할떄는 다르게 동작한다.
- 해당 boolean값이 false, undefined일경우에는 해당속성이 태그에 포함되지않은 채로 랜더링된다.

# javascript표현식
- vue.js는 모든 데이터 바인딩 내에서 javascript표현시의 기능을 지원한다.
- 제약 사항은 하나의 단일 표현식에만 사용 가능하다는 것이며, 조건문은 작동하지 않는다.



