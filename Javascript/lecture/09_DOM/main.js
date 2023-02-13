//~ DOM(Document Object Model)

// DOM이란 HTML 문서를 객체로 표현한 것으로,
// JS에서 HTML을 제어할 수 있게 해준다.

const element = document.querySelector('h1');
console.log(element.textContent);

//~ Node vs Element
// - 노드(Node) : HTML 요소, 텍스트, 주석 등 모든 것을 의미한다.
// - 요소(Element) : HTML 요소만을 의미한다.

    const parent = document.querySelector('.parent');
    
    // 부모 요소의 모든 자식 노드 확인하기
    console.log(parent.childNodes); // 7개 NodeList(7) [text, comment, text, div.child, text, div.child, text]0: text1: comment2: text3: div.child4: text5: div.child6: textlength: 7[[Prototype]]: NodeList

    // 부모 요소의 모든 자식 요소 확인하기
    console.log(parent.children); // 2개 HTMLCollection(2) [div.child, div.child]


//~ DOM API

