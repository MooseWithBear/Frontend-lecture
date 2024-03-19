
// Standard Built-in Object 표준 내장 객체

//! String
//length : str, arr
//includes() : boolean
//indexOf() : index, -1
//lastIndexOf() : 뒤에서부터 index
//padEnd() : (자리수가 n보다 짧으면, 길이가 n이 될 때까지 ''을 뒤쪽에 채워넣는다.)
//padStart() : (자리수가 n보다 짧으면, 길이가 n이 될 때까지 ''을 앞쪽에 채워넣는다.)
//replace() : 대상 문자에서 패턴(문자,정규식)과 '첫번째로' 일치하는 부분만을 교체하여 새로운 문자를 반환한다.
//replaceAll() : 대상 문자에서 일치하는 모든 문자열을 바꾸어준다.
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
//toString(n) : n진법의 값으로 반환한다.
// >>> : '정수' 값을 양수로 캐스팅하는 연산자

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
// 반복 .some() : 대상 배열의 어떤요소라도 콜백 테스트를 통과하는지 확인한다. 하나라도 true면 true 반환. const arr = [1,2,3,4]; console.log(arr.some(x => x>3));
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
// .shift() : 대상 배열에서 첫번째 요소를 제거하고 제거된 요소를 반환한다. 원본도 변경된다
// .unshift() : 새로운 요소를 대상배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환한다. 원본도 변경된다 console.log(arr.unshift("x")) // 2 | console.log(arr) // ["x", "a"]
// 반복 .reduce() : 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 (누적)반환합니다. const numbers = [1,2,3]; const sum = numbers.reduce((acc, cur) => {return acc + cur}, 0) // 6 (0+1),(1+2),(3+3) //^ acc의 초기 값은 0으로 지정된 것이고, cur은 numbers 배열을 순서대로 순환한다. 그리고 그 다음 a값은 이전 리턴값인(0+numbers[0]) 1이 된다.
                    {   // 4개요소 설명 및 객체데이터를 reduce()로 활용
                        // const users = [
                        //     {name: "Neo", age:100},
                        //     {name: "Peo", age:200},
                        //     {name: "Keo", age:300},
                        // ]
                        // //총 나이합산
                        // const totalAge = users.reduce((acc,cur) => {return acc + cur.age} , 0)
                        // console.log(totalAge);
                        // //모든 이름 추출
                        // const nameArray = users.reduce((acc,cur) => {acc.push(cur.name); return acc}, []).join(', ');
                        // console.log('nameArray: ', nameArray);
                        //~~~~
                        // array.reduce(function(accumulator, currentValue, currentIndex, array) {
                            코드
                        //   }, initialValue);
                        
                        // accumulator: 이전 콜백 함수의 반환값. 첫 번째 요소가 처리될 때는 initialValue가 사용된다.
                        // currentValue: 배열의 현재 요소
                        // currentIndex: 현재 요소의 인덱스. 선택 사항.
                        // array: 원본 배열. 선택 사항
                        // initialValue: 선택 사항으로, 지정되지 않은 경우에는 배열의 첫 번째 요소가 사용되며, 지정한 경우에는 콜백 함수의 첫 번째 인수로 전달된다.
                    }                                                                               
// .reverse() : 대상 배열의 순서를 반전하고, 원본도 변경된다.
// .slice() : 문자도 가능// 대상 배열의 일부를 추출해 새로운 배열을 반환한다. (첫번째 인수부터 ~ 두번째 인수 직전까지 호출하고, 생략하면 끝까지 추출)
// .sort() : 대상 배열을 콜백의 반환 값(음수,양수,0)에 따라 정렬한다. 콜백을 지정하지 않으면 요소를 문자열로 반환 후 유니코드 코드 포인트 순서로 정렬한다.users.sort((a,b) => a.age-b.age)// 객체의 나이 순서대로 정렬
// .splice() : 대상 배열애 요소를 추가하거나 삭제하거나 교체한다. 원본이 변경된다. arr.splice(2,0,'add') // ["a", "b", "add" "c"] -> arr[2]인덱스 자리를 제어함. 즉, 2자리에서 본인포함 0개의 요소를 삭제하고, 'add'라는 string을 그 위치에 추가해준다. 기존 데이터는 밀려남
// Array.from() : 유사배열(Array-like)을 실제 배열로 반환한다.
// Array.isArray() : 배열데이터인지 확인한다.



//! 객체 Object
// Object.assign() : 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상객체를 반환한다.
                    // const target = {a:1,b:2}; const source1 = {b:3,c:4}; const source2 = {c:5,d:6}; const result = Object.assign(target, source1, source2) // {a:1, b:3, c:5, d:6} | target 요소 자리 앞에(즉 맨앞요소에) 빈객체를 사용하면 target변수의 데이터도 보호된다.
                    // 전개연산자를 사용하면 const result = {...target, ...source1, ...source2,}
// Object.entries() : 주어진 객체의 각 속성과 값으로 하나의 각각의 배열을 만들어 요소로 추가한 2차원 배열을 반환한다.
                    // const numbers = { 1 : 2, 3 : 4, 5 : 6,} console.log(Object.entries(numbers)); // [ [ '1', 2 ], [ '3', 4 ], [ '5', 6 ] ]
                    // 반복문 활용시 for (const [key, value] of Object.entries(numbers)) {console.log(key, value)} // 1 2.. 3 4.. 5 6..
// Object.keys() : 주어진 객체의 속성 '이름'을 나열한 배열을 반환한다.
                    // console.log(Object.keys(numbers)) // [1, 3, 5,]
// Object.value() : 주어진 객체의 속성 '값'을 나열한 배열을 반환한다.
                    // console.log(Object.values(numbers)); // [2,4,6,]


//! JSON (JavaScript Object Notation)
// JSON 기본정보 : 
                // 데이터 전달을 위한 표준포맷이다. 
                // 문자, 숫자, boolean, null, 객체 배열만 사용한다.
                // 문자는 큰 따옴표("")만 사용한다.
                // 후행 쉼표[1,2,]는 사용 불가하다.
                // 파일은 .json 확장자를 사용한다.
// JSON.stringify() : 데이터를 JSON문자로 변환한다.
// JSON.parse() : JSON 문자를 분석해 데이터로 변환한다.







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

//^ 캐스팅이란?
//캐스팅은 변수의 타입을 다른 타입으로 변환하는 것을 의미한다. 
//그리고 자바스크립트에서는 자동 캐스팅과 강제 캐스팅이 있다. (자동 -> * / 연산자 사용시)
