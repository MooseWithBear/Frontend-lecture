
// Standard Built-in Object 표준 내장 객체

//! String
//length : str, arr
//includes() : boolean
//indexOf() : index, -1
//padEnd() : (자리수가 n보다 짧으면, 길이가 n이 될 때까지 ''을 뒤쪽에 채워넣는다.)
//padStart() : (자리수가 n보다 짧으면, 길이가 n이 될 때까지 ''을 앞쪽에 채워넣는다.)
//replace() : 대상 문자에서 패턴(문자,정규식)과 일치하는 부분들 교체한 새로운 문자를 반환한다.
//slice() : 문자의 일부를 추출해 새로운 문자를 반환 slice(0,5)->0~4 / (6,-1)->6~-1 / (6) -> 6~끝까지
//split() : 문자를 주어진 구분자로 나눠 배열로 반환 (띄어쓰기도 문자이므로 주의)
//toLowerCase(), toUpperCase();
//trim() : 문자열의 앞뒤 공백(space,tab)을 제거한 새로운 문자를 반환한다.
//substring() : 문자열을 잘라내어 반환한다. subString(n,n2) n'번째부터' n2 '이전까지'


//! Num
//toFixed(n) : 숫자를 주어진 인수자리수까지 표현하는 '문자'로 반환
//toLocaleString() : 숫자를 현지 언어 형식의 문자로 반환한다. //1,000,000
//Number.isInteger() : 숫자가 정수(integer)인지 boolean으로 반환
//Number.isNaN() : 주어진 값이 'NaN'인지 확인합니다.
//Number.parseInt() or parseInt('s',10진수) : 주어진 문자,숫자를 파싱해 특정 진수(radix)의 정수로 반환 
//Number.parseFloat() or parseFloat() : 주어진 문자,숫자를 파싱해 부동소수점 실수(숫자)로 반환


//! Math
//Math.abs() : 주어진 숫자의 절대값(Absolute value)을 반환한다. Math.abs(-2) // 2 
//Math.ceil() : 숫자를 올림(ceil.천장)해 정수로 반환한다. Math.ceil(3.2222) // 4
//Math.floor() : 숫자를 내림(floor.바닥)해 정수로 반환한다. Math.floor(3.2222) // 3
//Math.max() : 주어진 숫자들 중 가장 큰 숫자를 반환한다. 배열인경우 Math.max(...co) // Math.max(5,86,3,22,6) //86
//Math.min() : 주어진 숫자들 중 가장 작은 숫자를 반환한다. 배열인 경우 spread 연산자(...)를 사용한다.
//Math.pow() : 주어진 숫자를 거듭제곱(power)한 값을 반환한다. Math.pow(6, 5) // 6을 5제곱 // 7776
//Math.random() : (default)숫자 0이상 ~ 1미만의 난수를 반환한다. Math.floor(Math.random() * 6) // 랜덤 0~5
//Math.round() : 주어진 숫자를 반올림(Round half down)해 정수로 반환한다. Math.round(3.73) // 4
//Math.sqrt() : 주어진 숫자의 제곱근(SQuare RooT)을 그대로 반환한다.


//! Date
// const date1 = new Date(); console.log(date1)
// const date2 = new Date(2022, 11, 25, 13, 22, 50); console.log(date2) // 월부분은 1월=0, 2월=1 ...
// console.log(date2.getFullYear())
// .getFullYear() : 날짜 인스턴스의 연도의 기존 데이터를 '반환'한다. date2.getFullYear() // 2022
// .setFullYear() : 날짜 인스턴스의 연도를 새로운 데이터로 '지정'한다. date2.setFullYear(2023); date2.getFullYear() // 2023
// .getMonth() : 날짜 인스턴스의 월을 반환한다. 0~11 // 1월 = 0, 2월 = 1...
// .setMonth() : 날짜 인스턴스의 월을 지정한다. 0~11 // 1월 = 0, 2월 = 1... date2.setMonth(0)  // ===1월
// .getDate(), setDate() : 동일 // 1~31
// .getHours(), setHours() : 동일 // 0~23
// .getSeconds(), setSeconds() : 동일 // 0~59
// .getDay(); : 일 = 0, 월 = 1
// .getTime(), setTime() : 1970-01-01 00:00:00 기준(유닉스타임)으로부터 경과한 시간을 ms로 반환하거나 지정한다.
// .Date.now() : getTime()과 기능이 유사하지만 정적 메소드로 실행되는 그 순간의 값을 반환한다.

//! Array ['요소', 'element']
//length : 길이 (string도 가능함)
// .at() : 대상 배열을 인덱싱한다. arr[0]==arr.arr(0), arr[arr.length-1] == arr.at(-1)
// .concat() : 대상배열과 주어진 배열을 병합해 새로운 배열을 반환한다. const arr3 = arr1.concat(arr2)
// 또는 전개연산자를 사용할수도 있다. const arr3 = [...arr1, ...arr2]
// 반복 .every() : 배열내에서 반복하며 모든 요소가 콜백 테스트에서 통과(true)하는지 반환하는지 확인한다. 하나라도 false면 false; arr.every(x => x < 5) // true
// 반복 .map() : 배열내에서 반복하며 길이만큼 주어진 콜백을 진행하고, 콜백반환값을 모아 새로운 배열을 반환한다. numbers.map(x => x*2) // [2,4,6,8]
// 반복 .filter() : 배열내에서 반복하며 주어진 콜백 테스트를 통과(true)하는 모든 요소를 새로운 배열로 반환한다. 모두 false면 빈배열 반환; arr.filter(x => x < 5) // [1,2,3]
//                객체배열의 경우. const users = [{name:"Neo", age:99},{name:"Amy", 5}] const adults = users.filter(x => s.age >= 19) // {name:"Neo", age:99}
// 반복 .find() : 배열내에서 반복하며 콜백 테스트를 통과하는 첫번째 요소를 반환한다. arr.find(x => x > 10) // 130;
//                객체배열의 경우. const foundUser = users.find(x => x.name === "Amy") // {name:"Amy", age:5}
// 반복 .findIndex() : 배열 내에서 반복하며 콜백테스트를 통과하는 only 첫번째 요소의 인덱스를 반환한다. arr.findIndex(x => x>5) // 0;
// 통합 .flat() : 대상 배열의 하위 배열을 지정한 깊이(de=1)까지 이어붙인 새로운 배열을 생성한다. [1,2,[3,4]].flat() // [1,2,3,4],  [1,2,[3,4,[5,6,[7,8]]]].flat(2) // [1,2,3,4,5,6,[7,8]]
// 반복 .foreach() : for(i<arr.length)문과 동일하게 대상 배열의 길이만큼 주어진 콜백함수를 실행한다. //! 단, 중간에 멈출 수 없다. arr.forEach(x => console.log(x)) // A 반복1 B 반복2 C 반복3
// .includes() : 대상 배열이 특정 요소를 포함하고 있는지 boolean 값으로 반환한다. arr.includes("a") // true
//& 참조형 데이터(객체,배열,함수)는 모양새가 같아도 항상 같은 데이터가 아니며 서로 다른 데이터일 수 있다. (!=)
// .join() : 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환한다. arr.join(), (','), (' / ')
// .pop() : 대상 배열의 마지막 요소를 제거하고 그 요소를 반환한다. 원본도 변경된다.
// .push() : 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 새로운 길이를 반환한다. 원본도 변경된다. newLength = a.push("n") // newLength=3, a=[]
// .reduce()



//splice() : 

//^ 콜백이란?
// 자바스크립트에서 콜백(callback)은 함수의 인자(매개변수)로 전달(사용)되는 함수를 의미한다. 
// 이렇게 전달된 함수는 특정 조건이 만족되거나, 특정 작업이 완료되면 실행될 수 있도록 설계된다. 

// function add(a, b, callback) {
//     let result = a + b;
//     callback(result);
//   }

//   add(1, 2, function(result) {
//     console.log(result); // 3
//   });

//위 코드에서 add 함수는 인자로 a, b와 콜백 함수가 전달되는데,
// 이 콜백 함수는 add 함수의 실행이 완료된 후에 실행된다.
// 콜백을 이용하면 코드의 실행 순서를 제어할 수 있기 때문에 JS에서 자주 사용된다.

