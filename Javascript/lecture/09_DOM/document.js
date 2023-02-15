//~ document.getElementById()
    // HTML `id` 속성(Attributes) 값으로 검색한 요소를 반환한다.
    // 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다.
    //^ 검색 결과가 없으면, `null`을 반환한다.

    const el = document.getElementById('child2') // # 없이 작성해야한다.
    console.log(el);


//~ document.querySelector()
    // `CSS 선택자`로 검색한 요소를 하나 반환한다.
    //^ 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다.
    // 검색 결과가 없으면, `null`을 반환한다.

    const el2 = document.querySelector('.child:first-child')
    console.log(el2);


//~ document.querySelectorAll()
    // 'CSS 선택자'로 검색한 모든 요소를 `NodeList`로 반환한다.
    //^ `NodeList` 객체는 `.forEach()`를 사용할 수 있다. (배열 반복문 쓰듯이)
    // nodeList는 유사배열(Array like)이다.
    
    const nodeList = document.querySelectorAll('.child');
    console.log(nodeList);
    nodeList.forEach(el => console.log(el.textContent))