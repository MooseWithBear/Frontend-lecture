//001. const fruits = ['a','b','c','d']; -> 인간이 편하게 하기 위한 방법
//002. const fruits = new Array['a','b','c','d']; -> 본래 컴퓨터가 인식하는 방법
//003. console.log(fruits.length); -> console.log(fruits.prototype.length); 와도 같다
//004. Array.prototype.bora = function () {console.log(this)};
//      fruits.bora() // ['a','b','c','d']
//005. const arr = []; 
//      arr.bora() // []
//006.  ES2015부터 class 지원하기 시작
//007. 자바스크립트 객체는 속성을 저장하는 동적인 "가방"과 (자기만의 속성이라고 부른다) 프로토타입 객체에 대한 링크를 가진다. 객체의 어떤 속성에 접근하려할 때 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입 등 프로토타입 체인의 종단에 이를 때까지 그 속성을 탐색한다.

//! prototype
// 자바스크립트는 정확하게는 클래스 기반의 언어는 아니며 프로토타입 기반의 언어라고 할 수 있다.
// 자바스크립트에서 클래스를 사용할 수 있게된 것은 오래되지 않았다.
// 아래 두가지 방식은 동일한 결과를 만든다. 
const fruits = ['Apple', 'Banana', 'Cherry']; //단순하게 기호로 만드는 리터럴 방식으로 생성
console.log('fruits: ', fruits);
const fruits2 = new Array('Apple', 'Banana', 'Cherry') //생성자 방식으로 생성
console.log('fruits2: ', fruits2);


// 배열데이터는 아래와 같은 length, includes 등과 같은 속성(Properties)이나 메소드(Methods)를 사용할 수 있을까?
// 이것은 Array 배열데이터가 프로토타입 속성, 메소드를 기본적으로 가지고 있다고 말할 수 있다.
console.log('fruits2.length: ', fruits2.length);
console.log('fruits2.includes("Banana"): ', fruits2.includes('Banana'));
console.log('fruits2.includes("Orange"): ', fruits2.includes('Orange'));


// 그렇다면 우리도 Array 안에 프로토타입 속성을 신규로 추가할 수 있다.
// 아래와 같이 Array 객체의 프로토타입의 bora(=includes같은)함수를 하나 만든 다음 fruits.bora(); 라는 함수로 똑같이 실행해보면,
Array.prototype.bora = function() {
    console.log(this)
}

// 새로 만든 프로토타입 함수를 통해 console.log(this)를 불러 온 것을 볼 수 있다!
fruits.bora(); // [ 'Apple', 'Banana', 'Cherry' ]

// bora()라는 함수는 Array의 새로운 프로토타입으로서 추가되었으니 이는 즉, 다른 배열에도 바로 사용할 수 있다는 의미이기도 하다.
const arr = [1,2,3];
arr.bora() // [ 1, 2, 3 ]

//! prototype 2

// 아래와 같은 객체데이터들을 한번 만들어보자
const bora1 = {
    firstName : 'a',
    lastName : 'b',
    getFullName : function() {
        return `${this.firstName} ${this.lastName}` //보간법
    }
    // getFullName() { // 옆에 처럼 :function 을 생략할 수도 있다.
    //     return `${this.firstName} ${this.lastName}` //보간법
    // }
}

const parang = {
    firstName : 'c',
    lastName : 'd',
    // getFullName : function() {
    //     return `${this.firstName} ${this.lastName}` //보간법
    // }
    
}

// 그다음 bora1의 속성인 getFullName함수를 불러온다면, this==bora1 이 되면서 a b 의 문자를 반환한다.
console.log(bora1.getFullName()); // a b
// console.log(parang.getFullName()); // c d

// parang 객체 데이터도 동일하게 이름을 반환하고 싶다면 똑같은 getFullName함수를 만들어 주어야 할 것이다.
// 하지만 이 말은 똑같은 코드가 수백개 수천개 인 경우, 매우 비효율적이다.

// 프로토타입의 특성을 사용한다면 효율적으로 바꿀 수 있다. 

//~ 방법 1. 그냥 bora1의 getFullName함수를 빌려쓴다.
console.log('bora1.getFullName.call(parang): ', bora1.getFullName.call(parang)); // c d
// 하지만 방법 1 또한 빌려써야할 함수들이 많아지면 계속해서 call함수를 사용해야하니 비효율적일 수 있다.


//~ 방법 2. 프로토타입을 통해 함수를 찍어내는 공장을 만든다.
function User (first,last) { // 공장(Prototype, Class)은 앞글자를 대문자로 사용하는 Pascal case 로 만든다.
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function () { // 프로토타입 함수을 정의할 때는 화살표 함수는 사용할 수 없다
    return `${this.firstName} ${this.lastName}` //보간법
}
const bora2 = new User('a', 'b')
const parang2 = new User('c','d')
console.log('bora2.getFullName(): ', bora2.getFullName()); // a b
console.log('parang2.getFullName(): ', parang2.getFullName()); // c d

//~ 방법 3. ES6 2015에 추가된 Class를 사용한다.
class User2 {    //소괄호 없음
    constructor(first, last) { //constructor가 기존의 function의 역할을 한다.
        this.firstName = first
        this.lastName = last
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}` //보간법
    }
}

const bora3 = new User2 ('a', 'b');
const parang3 = new User2 ('c','d');
console.log(bora3.getFullName()) // a b
console.log(parang3.getFullName()) // c d



//! Getter(값을 얻는 용도의 메소드)와 Setter (값을 지정하는 용도의 메소드)
class User4 {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
    get fullName() { //^ get을 사용한다면, 값을 얻어내는데에 쓸 수 있게 된다.
        return `${this.firstName} ${this.lastName}` //보간법
    }
    set fullName(value) { //^ 
        console.log(value)
    }
}
const bora4 = new User4('aa', 'bb');
console.log(bora4.fullName) 

bora4.fullName = 'cc dd'