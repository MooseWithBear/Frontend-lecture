//~ document.createElement()
    // 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환한다.

    var divEl = document.createElement('div')
    console.log('divEl: ', divEl);

    var inputEl = document.createElement('input')
    console.log('inputEl: ', inputEl);

//~ E.prepend() / E.append()
    // 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입한다.

    var parentEl = document.querySelector('.parent');

    var el = document.createElement('div');
    el.textContent = 'Hello~'

    parentEl.prepend(new Comment(' 주석 '));
    parentEl.append(el)
    parentEl.append('Text!')


//~ E.remove()
    // 요소를 제거한다.

    var el = document.querySelector('.child');
    // el.remove()


//~ E.insertAdjacentElement()
    // '대상요소'의 지정한 위치에 '새로운' 요소를 삽입한다.
    // 대상_요소.insertAdjacentElement(위치, 새로운_요소)
    
    // 예시)
    /* html */ `
       //! beforebegin  // 시작태그 위
    <div class="target">
       //! afterbegin   // 시작태그 아래
    내용 Content!
       //! beforeend    // 닫는태그 위
    </div> 
       //! afterend     // 닫는태그 아래
    `
    var childEl = document.querySelector('.child')
    var newEl = document.createElement('span');
    newEl.textContent = 'I\'m insertAdjacentElement'

    childEl.insertAdjacentElement('beforeend', newEl)


//~ N.insertBefore()
    // 부모 노드의 자식인 참조 노드의 이전형제로 노드를 삽입한다.
    // 부모_노드.insertBefore(노드, 참조_노드)

    var parentEl = document.querySelector('.parent')
    var childEl = document.querySelector('.child')
    var newEl = document.createElement('span')
    newEl.textContent = 'I\'m insertBefore!'

    parentEl.insertBefore(newEl, childEl)


//~ N.contains()
    // 주어진 노드가 노드의 자신을 포함한 후손인지 확인한다.
    // 노드.contains(주어진_노드)

    var parentEl = document.querySelector('.parent')
    var childEl = document.querySelector('.child')

    parentEl.contains(childEl)
    console.log('parentEl.contains(childEl): ', parentEl.contains(childEl));
    console.log('document.body.contains(parentEl): ', document.body.contains(parentEl));
    console.log('document.body.contains(childEl): ', document.body.contains(childEl));
    console.log('document.body.contains(document.body): ', document.body.contains(document.body));
    console.log('parentEl.contains(parentEl): ', parentEl.contains(parentEl));
    console.log('parentEl.contains(document.body): ', parentEl.contains(document.body));
    console.log('childEl.contains(document.body): ', childEl.contains(document.body));