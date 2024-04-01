// 001. 'cmd + k'  => 터미널 클리어
// 002. 'npm init -y' => 패키지 빠른실행(모두 yes)
// 003. 'npm install lodash' => lodash라는 패키지 설치
// 004. 'npm install parcel --save-dev => parcel이라는 패키지를 설치하지만 개발용도로만 설치하는 명령 -> 실제브라우저에서는 동작안함 == (--save-dev parcel )
// 005. 'npm install -D parcel' => 004번의 축약형
// 006. packages.json, package-lock.js 파일은 패키지의 정보를 담고 있으며 각 패키지마다 찾아볼 수 있음 
// 007. dependencies, devDependencies => 해당 패키지가 구동되기 위해 의존하고 있는 패키지 정보
// 008. node_modules 폴더를 삭제하더라도 006파일들이 온전하다면 'npm install' 명령을 통해 언제든지 복구 할 수 있다. 
// ~ .gitignore을 생성하여 파일명 또는 폴더명을 저장해두면 해당 파일은 커밋시 자동제외된다.
// 009. main.js연결, 내부에 import _ from 'lodash' => underbar가 변수기능을 수행하여 node_modules을 불러올 수 있다.
// 010. 고도화된 개발의 경우는 live server만을 활용하기에는 어려움이 있을 수 있다. => parcel번들을 사용하여 '개발용'서버 오픈할 수 있다.
// 011. package.json "script" 부분을 수정하였음. => "dev": "parcel ./index.html" => 터미널에서 npm run dev의 명령으로 서버를 동작시킬 수 있다.
// 012.   💡 Add the type="module" attribute to the <script> tag.라는 에러가 발생하는데, <script src=""> 태그에 type을 추가해주면 정상적으로 구동된다.
// 013. Server running at http://localhost:1234 (console.log 출력-HELLO WORLD)
// 014. main.js를 ts파일로 변경하여도 parcel bundle이 JS로 변환하여주기 때문에 바로 브라우저에 출력가능하다.
// 015. 변환(실제서비스에 빌드)된 파일은 dist(ribute) 폴더에서 확인가능하다. 즉 배포시에도 dist 폴더내 결과파일만 업로드하면 된다.
// 016. 제품용 빌드 명령어를 만들기 위해    scripts내에 "build": "parcel build ./index.html" 추가, 상단의 "main":index.js를 삭제한다.
// 017. 제품용 빌드 명령은 npm run build 가 되며 파일은 난독화가 되어있다.
// 018. 즉, dist폴더도 .gitignore파일에 추가해주면 좋다.
// ~ 버전에 나타나는 3개의 숫자의 의미 : 유의적버전 (Major.Minor.Patch) 2.13.4
// 다른 버전 설치명령어 => npm install lodash@4.16.1
// 버전 업데이트 명령어 => npm update lodash
// 019. Major => 기존 버전과 호환되지 않는 새로운 버전
// 020. Minor => 기존 버전과 호환되는 기능이 추가된 버전
// 021. Patch => 기본 버전과 호환되는 버그 및 오타등이 수정된 버전
// 022. ^ 표시의 의미 => 동일한 Major 버전 안에서 최신버전으로 업데이트 가능하다는 의미 (package.json ^를 지워두면 업데이트를 명령 하더라도 버전이 변하지 않음)
// 023. ~ 표시의 의미 => 동일한 Minor 버전 안에서 최신버전으로 업데이트 가능하다는 의미 (~를 지워두면 업데이트를 명령 하더라도 버전이 변하지 않음)