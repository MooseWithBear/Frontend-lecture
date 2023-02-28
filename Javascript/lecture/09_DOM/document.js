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
    console.log('nodeList: ', nodeList);
    nodeList.forEach(el => console.log(el.textContent))
    console.log(Array.from(nodeList).reverse())


//~ N.parentElement
    // 노드의 부모 요소를 반환한다.

    const el3 = document.querySelector('.child');
    console.log(el.parentElement);


//~ E.closest()
    // 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는 가장 가까운 요소를 반환한다.
    // 요소를 찾지 못하면, `null`을 반환한다.

    const el4 = document.querySelector('.child');
    console.log('el.closest(\'div\'): ', el.closest('div'));
    console.log('el.closest(\'body\'): ', el.closest('body'));
    console.log('el.closest(\'.hello\'): ', el.closest('.hello'));


//~ N.previousSibling / N.nextsibling
    // 노드의 이전 형제 혹은 다음 형제 노드를 반환한다.

    const el5 = document.querySelector('.child')
    console.log('el.previousSibling: ', el.previousSibling);
    console.log('el.nextSibling: ', el.nextSibling);
