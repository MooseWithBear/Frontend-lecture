// Module이란 특정(문자,숫자,배열,객체등) 데이터들의 집합(파일)이다.
// 모듈은 가져오기(Import), 내보내기(Export)를 할 수 있다.
// 모듈기능을 사용하기 위해서는 node.js나 webpack등 추가적인 라이브러리나 프레임워크가 필요하다.
// 모듈 import 명령어는 항상 최상단에 작성한다.

// 기본 내보내기
// 기본 내보내기(default)의 내보낼 수 있는 데이터는 1개만 가능하다. 나머지는 export const number 등으로 사용한다.
// export default 123 // import number, {} from './module.js'

// 이름 내보내기
// 이름 내보내기는 수에 제한이 없고 import할 때는 기존 변수명을 그대로 사용해야 한다.
// export const str = "abc"; export const arr = []; export function hello() {}
// import number, {str, arr, hello} from './module.js'
//^ 데이터 이름을 바꾸고 싶다면, import {str as xyz, arr, hello as h} from './module.js'

// 데이터를 동적으로 가져오기
// 01. 모든 데이터를 하나의 변수에 담아두는 방법 :  import * as abc from './module.js' // as라는 변수에 객체가 생성되며 객체 안에 각각 데이터가 들어간다.
// 02. 원칙적으로 import는 코드 최상단에 작성해야 하지만 특성 함수 내부에서 import를 하려면,
//      setTimeout(() => {
//          import('./module.js').then(abc => {console.log(abc)})
//      }, 1000);
// 03. 비동기 방식 : 
        // setTimeout(async () => {
        //     const abc = await import('./module.js');
        //     console.log(abc)
        // }, 1000)
// 04. utils(일종의hub)파일을 만들어서 여러 파일(a,b.js)들을 한 번에 내보낼 수 있다.
        // import { a, b } from './utils.js'


// import { hello } from './module.js'
// console.log(hello)

//--------------------------------------------------------//
// import number from  './module.js'
// console.log(number);

//--------------------------------------------------------//
// import number, {str, arr, hello} from './module.js'