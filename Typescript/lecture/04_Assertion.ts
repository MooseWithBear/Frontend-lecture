// 타입 단언 (Assertion)
// '단언' - 주저하지 않고 딱 잘라 말함

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
    const el = document.querySelector('body')
    // el.textContent = 'Hello'

// 2)
    function getNumber(x:number | null | undefined) {return Number(x?.toFixed(2))}