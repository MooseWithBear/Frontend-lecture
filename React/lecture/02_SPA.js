//! SPA (Single Page Application)

// 전통 : Multi Page Application == 여러개의 html이 각각의 페이지가 됨 (링크이동)
// 최근 : Single Page Application == 하나의 html파일이 동적으로 바뀜 (새로고침)

// React, Vue는 SPA 이고, (App.js) 파일 내 내용이 변경되면 즉시 html 화면에 적용된다.
// React-Router-Dom -> HTML 5의 History API를 사용해서 가능하게 한다.
// History API를 이용해 현재 페이지 내에서 화면 이동이 일어난 것처럼 작동한다.

// History API 예시..
// History.back() // 뒤로가기
// History.forward() // 앞으로가기
// History.go() // 특정세션으로 이동할 수 있는 비동기 메서드 숫자를 넣어 이동 가능
// History.pushState() // 주어진 데이터를 세션 기록 스택에 저장
// History.replaceState() // 최근 세션 기록 스택의 내용을 주어진 데이터로 교체



