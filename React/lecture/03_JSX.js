//! JSX 
// JSX는 JS의 확장문법 중 하나이다. 이것을 이용해 화면에 보이는 UI를 제공한다.
// 자바스크립트와 HTML구조가 합쳐져 있는 문법이기 때문에 쉽게 코드를 작성할 수 있다.
// JSX는 여러 엘리먼트가 있다면 하나로 감싸주는 태그가 필요하다 (or 에러발생)

// 전통적인 리액트 방식 : 
// const myelement = React.createElement('h1, {}, 'text');
// ReactDom.render(myelement, documone.getElementById('root')); 연결

// 전통적인 리액트 방식 2 :
// function hello () {
//     return React.createElement("div", null, "text!")
// }

// 현대적인 리액트+JSX 방식 : 
// function hello () {
//     return <div>text!</div>
// }

// babel의 역할은 전통적인 코드로 변환하여 브라우저의 오래된 버전들이 하위호환할 수 있도록 해준다.  