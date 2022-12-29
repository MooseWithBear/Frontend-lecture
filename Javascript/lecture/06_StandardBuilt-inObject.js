
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


//! Num
//toFixed(n) : 숫자를 주어진 인수자리수까지 표현하는 '문자'로 반환
//toLocaleString() : 숫자를 현지 언어 형식의 문자로 반환한다. //1,000,000
//Number.isInteger() : 숫자가 정수(integer)인지 boolean으로 반환
//Number.isNaN() : 주어진 값이 'NaN'인지 확인합니다.
//Number.parseInt() or parseInt('s',10진수) : 주어진 문자,숫자를 파싱해 특정 진수(radix)의 정수로 반환 
//Number.parseFloat() or parseFloat() : 주어진 문자,숫자를 파싱해 부동소수점 실수(숫자)로 반환