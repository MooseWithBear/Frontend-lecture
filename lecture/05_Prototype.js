//001. const fruits = ['a','b','c','d']; -> 인간이 편하게 하기 위한 방법
//002. const fruits = new Array['a','b','c','d']; -> 본래 컴퓨터가 인식하는 방법
//003. console.log(fruits.length); -> console.log(fruits.prototype.length); 와도 같다
//004. Array.prototype.bora = function () {console.log(this)};
//      fruits.bora() // ['a','b','c','d']
//005. const arr = []; 
//      arr.bora() // []
//006.  ES2015부터 class 지원하기 시작
//007. 자바스크립트 객체는 속성을 저장하는 동적인 "가방"과 (자기만의 속성이라고 부른다) 프로토타입 객체에 대한 링크를 가진다. 객체의 어떤 속성에 접근하려할 때 그 객체 자체 속성 뿐만 아니라 객체의 프로토타입, 그 프로토타입의 프로토타입 등 프로토타입 체인의 종단에 이를 때까지 그 속성을 탐색한다.