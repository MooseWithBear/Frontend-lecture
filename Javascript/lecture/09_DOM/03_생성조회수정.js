// document.createElement()
    // 메모리에만 존재하는 새로운 HTML 요소를 생성해 반환한다.

    var divEl = document.createElement('div')
    console.log('divEl: ', divEl);

    var inputEl = document.createElement('input')
    console.log('inputEl: ', inputEl);

// E.prepend() / E.append()
    // 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입한다.

    var parentEl = document.querySelector('.parent');

    var el = document.createElement('div');
    el.textContent = 'Hello~'

    parentEl.prepend(new Comment(' 주석 '));
    parentEl.append(el)
    parentEl.append('Text!')