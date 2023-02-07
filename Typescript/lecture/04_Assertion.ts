// 타입 단언 (Assertion)
// '단언' - 주저하지 않고 딱 잘라 말함 
// => 개발자가 타입스크립트에게 딱 잘라 말해두는 것을 의미한다고 이해하면 된다.

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
    const el = document.querySelector('body') as HTMLBodyElement //as 를 통해 단언을 해두면 타입스크립트는 더이상 아래 코드를 에러로 표현시키지 않는다.
    el.textContent = 'Hello'

// 2)
    function getNumber(x:number | null | undefined) {
        return Number((x as number).toFixed(2))} // x는 number데이터라는 것을 단언해줌으로써 에러를 없앨 수 있지만 잘못됀 코드이다. 이유 : 

    getNumber(3.14159265353)
    getNumber(null)

// 3)
    function getValue(x:string | number, isNumber: boolean) {
        if(isNumber) {
            return Number(x.toFixed(2))
        }
        return x.toUpperCase()
    }
    getValue('hello', false)
    getValue(3.145926535, true)