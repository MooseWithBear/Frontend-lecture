//! create react app의 기본 구조
// https://create-react-app.dev/docs/folder-structure

//~ 이름이 수정되면 안되는 파일들
// 1. public/index.html -> 페이지 템플릿
// 2. src/index.js -> 자바스크립트 시작점

//~ folders
// public 폴더 // index.html에 들어가는 attr 파일들은 public 폴더 내에 보관한다.
// src 폴더 // 대부분의 작업은 여기서 작성된다.
// src 폴더 // 웹팩(webpack)은 src폴더내에 있는 파일만 본다. 이외 폴더는 webpack의 최적화 작업에 포함되지 않음

//~ /package.json
// package.json 파일 // 해당 프로젝트에 대한 각종 정보(라이브러리 버전,이름등)들이 들어있다. 그리고 앱을 시작,빌드,테스트할 때 사용할 각각의 스크립트등이 명시되어있다.
// dependencies // 프로젝트를 구동하기 위해 필요한 라이브러리들의 버전들이 명시되어있다.
// scripts // 리액트 앱 실행,빌드,테스트등의 스크립트가 명시되어있다. 여기에 자주실행해야하는 명령어를 등록해두면 terminal 에서 npm 명령어로 사용할 수 있다.
// eslintConfig // 소스코드를 입력할 때 문법이나 코드 포맷을 체크해주는 것에 대한 설정을 명시되어있다.

//~ src/App.js 
// SPA방식을 통해 public/index.html #root 를 통해 src/index.js <App/>을 통해 src/App.js를 불러오는 구조

