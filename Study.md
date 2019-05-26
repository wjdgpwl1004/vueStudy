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

# 디렉티브
- 디렉티브는 v-접두사가 붙어있는 특수속성이다.
- 디렉티브 속성은 단일 Javascript표현식 사용이 가능하다.(v-for은 제외)
- 디렉티브의 역할은 표현식의 값이 변경될때 해당 값의 변화를 DOM에 적용하는 것이다.

# 전달인자
- 일부 디렉티브는 콜론으로 표시되는 '전달인자'를 사용할 수 있다.
- 예로 v-bind 디렉티브는 반응적으로 html 속성을 갱신하는데 사용된다.

```
<a v-bind:href="URL">이동</a>
```
- 여기서 href는 전달인자이다.
- href의 속성값을 URL의 값에 바인드 한다.

# 수식어
- 수식어는 .(점)으로 표시되는 특수 접미사로, 디렉티브를 특별한 방법으로 바인딩한다.
- 예로 .prevent수식어는 트리거된 이벤트에서 event.preventDefault()를 호출해야함을 디렉티브에게 알려준다.

# 약어
- vue.js에서 자주 사용되는 디렉티브인 v-bind와 v-on디렉티브에 대한 약어를 제공한다.
```
<!-- 기존방식 -->
<a v-bind:href="URL">이동</a>
<a v-on:click.prevent="changeMsg">prevent</a>

<!-- 약어방식 -->
<a :href="URL">이동</a>
<a @click.prevent="changeMsg">prevent</a>
```

# computed와 watch
- computed속성
  - 템플릿 내에 표현식을 사용해야 편리하지만, 장황할수록 유지보수하기 어려워진다.
  - 복잡한 로직이라면 반드시 computed속성을 사용해야 한다.

```
<template>
  <div class="hello">
    <p>원본 메세지: {{message}}</p>
    <p>역순 메세지: {{reversedMessage}}</p>
  </div>
</template>

<script>
export default {
  name: 'template',
  data () {
    return {
      message: 'Bear'
    }
  },
  computed: {
    reversedMessage () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

```

- computed와 method의 차이
  - computed 속성은 매번 연산을 새로 진행하는 것이 아니라 캐싱해두었다가 재 호출시 캐싱된 결과를 리턴해준다.(성능적인 이점)

- computed 와 watch
  - vue.js에는 vue 인스턴스의 데이터를 감시하고, 데이터 변경시 콜백되는 watch속성을 제공한다.

- computed 속성의 Setter함수
   - computed 속성은 기본적으로 getter함수만 가지고 있지만, 필요에 따라서 setter함수를 정의하여 사용할 수 있다.

- Watch속성
  - 대부분의 경우에는 Computed속성이 적합하지만, 감시자 속성이 필요한 경우가 있다.
  - watch속성은 감시할 데이터를 저장하고, 이에 대한 변경으로 비동기 또는 시간이 오래걸리는 조작을 사용할 때 유용하다.
  - computed속성은 이러한 기능을 수행할 수 없습니다. 

- 클래스와 스타일 바인딩
  - 데이터 바인딩은 엘리먼트의 클래스와 인라인 스타일을 조작하기 위해 사용한다.
  - v-bind속성을 사용해 처리할 수 있다. 
  
# HTML 클래스 바인딩
  
- 객체구문
  - 클래스를 동적으로 전달하기 위해 v-bind:class에 객체를 전달 할 수 있다. 
  - v-bind:class 에 할당된 객체가 반드시 인라인일 필요는 없다.
  - 인라인으로 바인딩 한 것과 같은 결과로 랜더링되며, computed속성으로도 같은 결과를 도출 할수 있다.
```
<template>
  <div class="hello">
  //isActive의 true, flase 값에 따라 active 클래스가 할당된다.
      <div v-text="message" v-bind:class="{active:isActive}"></div>
  </div>
</template>

<script>
export default {
  name: 'class',
  data () {
    return {
      message: 'Bear',
      isActive: true
    }
  }
}
</script>
```
- 배열구문
  - v-bind:class 에 배열을 전달하여 class를 저장할 수 있다.

# HTML 스타일 바인딩

- 객체구문
  - v-bind:style 은 매우 직설적이다.
  - css처럼 보이지만, javascript 객체이다.
  - 속성명에 camelCase와 kebab-case(따옴표 같이 사용해야함)을 사용할 수 있다.
  - 인라인 바인딩 보다는 객체 바인딩을 통하여 템플릿을 깔끔하게 하는것이 좋다.

# 조건부랜더링
- v-if
  - v-if와 v-else를 활용하여 조건부 랜더링이 가능하다.
  - v-else는 v-if 또는 v-else-if바로뒤에 있어야하며 조건이 필요없다.

  - v-show
    - 사용법은 v-if와 거의 일치한다.
    - 차이점은 v-show는 항상 DOM에 랜더링되며 display속성이 도글된다.

일반적으로 v-if는 토글 비용이 크고, v-show는 초기 랜더링 비용이 크다.
자주 바뀌는 것이라면 v-show , 런타임시 변하지않는다면 v-if를 사용할것

#리스트 랜더링
- v-for
  - v-for 디렉티브를 활용하여배열기반으로 리스트랜더링을 할 수 있다.
  - v-for 디렉티브는 item in items 형태의 문법으로 items가 원본배열이고
    item이 반복되는 엘리먼트의 별칭이다.
  - 두번째 인자로 index를 받아올 수 있다.
````
<div>
    <ul>
      <li v-for="{data, index} in list" :key="data" v-text="data"></li>
    </ul>
  </div>
````

- 배열변경
  - 뷰는 다음과 같은 메서드가 변이 메서드를 트리거한다.
  - 해당 메서드들의 호출될때 재 랜더링된다.
  - push()
  - pop()
  - shift()
  - unshift()
  - splice()
  - sort()
  - reverse()
  - 변이 메서드는 원본배열을 변경한다.

- 배열대체
  - 변이 메서드는 원본 배열을 변경하지만 아래의 메서드들은 새로운 배열을 생성하여 대체한다.
  - filter(), concat(), slice()
  - 기존 DOM을 버리고 재 랜더링하는것이 아닌 객체가 겹치는 다른 배열로 대체하여 효율적임.