// 1) 알고리즘 문제 풀이를 위한 JavaScript 핵심 문법
    //* 알고리즘 코딩 테스트 문제의 입출력 방식
        //~ 알고리즘 문제에서는 적절한(약속된) 입출력 양식이 주어진다.
            // 1. 첫번째 단계는 데이터를 입력 받거나 생성하는 것이다.
            // 2. 이후에 적절한 알고리즘을 사용하여 도출된 정답을 정확한 형식으로 출력한다.
            // 예시) 
                // 문제 : N명의 학생의 성적 데이터가 주어졌을 때, 이를 내림차순 정렬한 결과를 출력하여라.
                // 입력 형식 : 첫째줄에는 학생의 수 N이 자연수로 주어지고, 둘째 줄에 공백을 기준으로 하여 N명의 학생에 대한 성적이 정수형태로 주어진다. (2<=N<=1000, 0<=성적<=100)
                // 출력 형식 : N명의 학생의 성적을 내림차순 정렬한 결과를 첫째 줄에 공백을 기준으로 구분하여 출력하여라.
                    // 입력 예시 -> 5 , 17 88 53 100 73
                    // 출력 예시 -> 100 88 73 53 17
    
        //~ 일반적인 알고리즘 문제를 풀 때, 표준 출력으로 console.log()를 이용한다.
            // 예시)
                // console.log(); 또는 console.log(`정답은 ${result} 이다`);

    //* 코딩 테스트용 JavaScript 기본 사칙 연산
        //~ JavaScript 프로그래밍 언어에서는 기본적인 사칙 연산 기능을 제공한다.
            a = 7; b = 3;
            console.log(a + b);
            console.log(a - b);
            console.log(a * b);
            console.log(parseInt(a / b)); // 몫만 남기기 console.log(a % b);

    //* 코딩 테스트용 JavaScript 빠른 출력
        // JavaScript로 코딩 테스트 문제를 풀 때, 출력 과정만으로 시간 초과를 받을 때가 있다. •
        // 출력 시간을 단축하기 위해 다음과 같은 방법을 유용하게 사용할 수 있다.
            let answer = '';
            /* 여러 출력 결과를 한 줄에 하나씩 출력할 때 매 번 console.log()를 실행하지 않고, 
            하나의 문자열에 결과를 저장해서 한꺼번에 출력하는 것이 대개 더 빠르게 수행된다. */
            for (let i = 1; i <= 100; i++) {
                answer += i + '\n'; // 문자열로 변환하여 기록 
            }
            console.log(answer);

    //* 코딩 테스트용 JavaScript 기본 입력 – fs 모듈 
        // 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용한다.
        // 파일 데이터를 불러오는 데에는 여러 종류의 방법이 있지만 파일을 통째로 읽어와서 사용하는 fs 모듈이 가장 빠르게 동작하는 경우가 많다.
        // 예를 들어 /dev/stdin 파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
        // 기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기
            let fs = require('fs'); // readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리
            // let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 
            // let input = fs.readFileSync('input.txt').toString().split('\n');
            console.log(input);

    //* 코딩 테스트용 JavaScript 기본 입력 – readline 모듈
        // 한 줄씩 입력을 받아서, 처리하여 정답을 출력할 때는 readline 모듈을 사용할 수 있다. replit.com node.js로 실행 참고
            const rl = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            let input = [];
            rl.on('line', function(line) {
                //콘솔입력 창에서 줄바꿈(Enter)을 입력할 때마다 호출
                input.push(line);
            }).on('close', function() {
                //콘솔입력 창에서 Ctrl+C 혹은 Ctrl+D를 입력하면 호출(입력의 종료)
                console.log(input);
                process.exit
            })

    //* JavaScript 문법 – 조건문
        // 조건에 따라서 프로그램의 흐름을 결정할 때 사용할 수 있는 문법이다.
        /*
            condition: 참 혹은 거짓을 반환하는 조건식
            statement1: condition1이 참일 때 실행되는 구문
            statement2: condition1이 거짓이고, condition2가 참일 때 실행되는 구문
            statement3: condition1과 condition2가 거짓이고, condition3이 참일 때 실행되는 구문 statementN: 앞의 모든 조건문이 거짓일 때 실행되는 구문
        */
            // if (condition1)
            // statement1
            // else if (condition2) statement2
            // else if (condition3) 
            // statement3
            // ...
            // else ()
            // statementN

    //* JavaScript 문법 – for 반복문
        /*
            - 초기문이 존재한다면 초기문이 먼저 실행된다.
            - 조건문이 참이라면 블록 내부 코드가 실행되고, 거짓이면 반복문이 종료된다. - 블록 내부 코드가 실행된 뒤에 증감문이 실행됨.
        */
            for (초기문; 조건문; 증감문) {
                // statements
            }
            // 1부터 100까지의 합 계산
            let summary = 0;
            for (let i = 1; i <= 100; i++) {
                summary += i;
            }
            console.log(summary);

    //* JavaScript 문법 – while 반복문
        // 조건에 따라서 특정한 코드를 반복하고자 할 때 사용할 수 있는 코드이다.
        /*
            - while문은 조건문이 참일 때 실행되는 반복문입니다.
            - 블록 내부의 코드가 실행되기 전에 참 혹은 거짓을 판단합니다. 
        */
            while (조건문) {
            // 실행되는 코드 부분
            }

    //* JavaScript 문법 – Number와 String 형태 변환
        // 수(number) 데이터와 문자열(string) 데이터간의 상호 변환이 필요하다.
            /*
                Int -> String
            */
                let a1 = "777";
                let b1 = Number(a); console.log(b); // 777
            /*
                String -> Int
            */
                let a2 = 777;
                let b2 = String(a); console.log(b); // "777"