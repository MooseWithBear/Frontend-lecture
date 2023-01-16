// 타입 종류에 대해서
// 타입스크립트는 변수를 지정할 때 타입도 함께 지정해주어야 한다.
// 그 종류는 JS에서 사용하는 타입들과 몇가지 추가된 타입들도 있다.

//* 문자
    let str: string; // undefined가 나오지만 앞으로 들어갈 값은 string 이라는 것을 알려줘야한다.
    let red: string = "Red";
    let green: string = 'Green';
    let myColor: string = `My color is ${red}.`;
    let yourColor: string = 'Your color is' + green;

//* 숫자
    let num: number;
    let integer: number = 6;
    let float: number = 3.14;
    let infinity: number = Infinity;
    let nan: number = NaN;

//* 불린
    let isBoolean: boolean;
    let inDone: boolean = false;

//* Null / Undefined
    let nul: null;
    let und: undefined;
        // console.log(nul); 
        // 위 console.log에서 에러가 발생하는 이유는 값을 넣기(할당하기) 전에 사용했기 때문이다. [당연히 다른 타입도 동일함.]
        nul = null;
        console.log(nul); // 타입이 null인 변수에는 null만 들어갈 수 있고, null을 할당해 준 이후에는 에러가 발생하지 않게된다.

//* 배열
    const fruits: string[] = ['Apple','Banana','Cherry',]; // string 이외의 다른 타입(숫자등) 요소를 추가하면 에러가 발생한다.
    const numbers: number[] = [1,2,3,4,5,6,7,]; // number 이외의 다른 타입 요소를 추가하면 에러발생한다.
    const union: (string|number)[] = ['Apple', 1,2,'Banana',3,]; // string, number이외의 다른 타입을 추가하면 에러가 발생한다.
    // const array: [] = [1,2,3] 
    // 위 코드는 타입종류를 지정해주지 않았기 때문에 어떤 요소를 추가하더라도 에러를 발생시킨다.

//* 객체
    const obj: object = {}; 
    const arr: object = [];
    const func: object = function () {};
    // 위와 같이 타입을 object로 지정하는 경우는 거의 없다. ( 타입의 범위가 너무 크기 때문에 )
    // 아래와 같이 사용하는 것이 좋다.

    const userA: {
        name:string
        age:number
        isValid: boolean
    } = {
        name: 'Kim',
        age:99,
        isValid:true,
    };

    //^ interface 사용방법 (중복된 타입을 사용할 때 코드를 줄일 수 있다.)
    interface UserStandard {
        name:string
        age:number
        isValid: boolean
    };
    const userB: UserStandard = {
        name: 'Lee',
        age:100,
        isValid:false,
    };
    const userC: UserStandard = {
        name: 'Kang',
        age:22,
        isValid:true,
    };

//* 함수
    const add0: (x:number, y:number) => number = function (x,y) {return x+y}; //함수의 두 인수의 type은 number이고, return하는 값의 type도 number 이다. 라는 의미
    const add1 = function (x:number ,y:number):number {return x+y}; // 위 코드랑 같은 의미. 처음에 타입을 명시하지 않더라도 함수 자체안에 타입을 명시할 수 있다.
    const a: number = add0(1,2); const b: number = add1(1,2);
    const hello0: () => void = function () {console.log('hi!')}; // 함수에서 return키워드를 사용하지 않으면 기본적으로 undefined를 반환하는데, 이를 타입스크립트에서는 void가 반환된다고 판단한다. 즉, 타입을 특정하지 않겠다는 명시를 한다고 보면 된다.
    const hello1 = function ():void {console.log('hi!')}; // 위 코드랑 같은 의미.  처음에 타입을 명시하지 않더라도 함수 자체안에 타입을 명시할 수 있다.
    const h: void = hello0(); //


//* Any
//* Unknown
//* Tuple
//* Void
//* Never
//* Union
//* Intersection