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
#### 사용자입력핸들링
- v-on:이벤트명="함수명"
  - 해당 이벤트에 메서드를 바인딩하여 호출한다.

- v-model="data변수명"
 - 해당 변수에 해당하는 모델을 양방향으로 바인딩한다.

 #### 템플릿문법
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
