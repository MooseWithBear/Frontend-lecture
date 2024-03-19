// 001. npm init -y => npm 세팅 시작
// 002. npm i -D parcel => parcel 번들 설치(개발용)
// 003. index.html, main.js 생성 및 <script defer type="moduele" src  > 추가
// 004. package.js 파일 내 "script" 부분에 개발용, 빌드용 명령어 각각 추가
// => "dev":"parcel ./index.html", "build":"parcel build ./index.html"

//~원시형 데이터
// 005-1. String 데이터
//  -> const string1 = "hello" or 'hello' or `hello ${string2}`
// 005-2. Number 데이터
//  -> const number1 = 1 or -1 or 1.5, NaN(not a number)
//  -> console.log(typeof(1+undefined)) // NaN
//^     부동소수점오류 => console.log(0.1+0.2); // 0.30000000000000004
//  -> toFixed()는 자리수를 잘라냄 => console.log((0.1+0.2).toFixed(2)); //0.30
//  -> console.log(typeof((0.1+0.2).toFixed(2))); //~ string
//  -> console.log(typeof(Number((0.1+0.2).toFixed(2)))); //~ number
// 005-3. Boolean, null, undefined
//  -> true or false
//  -> FALSE 인 경우 => 1)false, 2)0, 3)null, 4)undefined, 5)NaN, 6)'', 7)0n (BigInt 라고 부름)
//~참조형 데이터 
// 006-1. Array 데이터
//  -> const alphabet = ["a","b","c"]; console.log(alphabet[1]) //"b" => 인덱싱한다고 표현
// 006-2 Object 데이터
//  -> age:22 명칭 => key==속성==property : value==값
//  -> 생성자 방식 const user = new Object(); user.name = "bora"; user.age=22 console.log(user) 
//      -> //{name: 'bora', age: 22}
//      -> function User() { this.name = "bora" this.age = 22 } const user = new User(); console.log(user);
//      -> // User {name: 'bora', age: 22}
//  -> 리터럴 방식 => 생성자 방식보다 간편하고 쉬움
// 006-3 function 데이터

// 