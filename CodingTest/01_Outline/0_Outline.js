// 0) 코딩테스트 알아보기
    //* 코딩 테스트란?
        // IT 관련 기업/기관에서 선발 목적으로 시행하는 일종의 문제 풀이 시험이다.
        // 다수의 지원자를 대상으로 공개 채용을 하는 기업에서는 코딩테스트를 주로 이용한다. (효율적임)

    //* 문제에 따른 테스트 분류 
        //~ 알고리즘 코딩 테스트
        // 정해진(일반적으로 2~5시간 이내)에 몇 개의 알고리즘 문제를 제시한다. (수학, 사고력, 집중력)
        // 적절한 알고리즘을 활용한 문제를 해결할 수 있는 능력을 평가한다.

        //~ 개발 과제 코딩 테스트 (보통 경력 이직)
        // 하나의 완성된 프로그램을 개발하는 것을 목표로 하는 시험이다.
        // 짧게는 몇 시간부터 길면 2주 이상의 시간을 부여한다.
        // 특정한 회사에서 실제로 사용하는 언어 혹은 프레임워크를 활용하도록 요구하기도 한다.
        
        //~ 온라인 코딩 테스트
        // 특정한 웹사이트에서 문제를 읽고, 정답 코드를 제출하도록 하는 코딩 테스트다.
        // 대체로 공개 채용에서는 혼자 힘으로만 문제를 풀도록 하며, 표절 검사를 시행한다.
        // 일반적으로 인터넷 검색을 허용하지만, 단순 검색으로 솔루션이 나오지 않는 문제를 출제한다.

        //~ 오프라인 코딩 테스트
        // 특정한 기업/기관의 시험장에 방문하여 치르는 코딩테스트다.
        // 인터넷 검색 허용 여부는 기관마다 다르다.
        // 오프라인 알고리즘 코딩테스트의 경우, 대체로 기관에서 제공하는 컴퓨터를 이용한다.

    //* 자신만의 소스코드 관리하기
        // 알고리즘 코딩 테스트를 준비하며 자신만의 코드 템플릿을 만드는 것이 유리하다.
        // 특히 대표적인 알고리즘(정렬, 최단 경로등)의 기본형에 대하여 미리 코드를 구현해 놓자.
        // 자신의 코드를 라이브러리화하여 깃허브에서 관리하는 것을 추천한다.
        // 예시) https://github.com/ndb796/Python-Competitive-Programming-Team-Notes

    //* IT 기업 코딩 테스트 최신 출제 경향
        // 대부분의 IT 대기업은 공개 채용 과정에서 알고리즘 코딩 테스트를 시행하고 있다.
        // 응시생들에게 2~5시간가량의 시간을 주고 여러 개의 정해진 알고리즘 문제들을 풀도록 한다.
        // 구현, DFS/BFS(탐색), 탐욕 알고리즘 유형이 출제 빈도가 높은 편이다. (최근 뿐만 아니라 예전부터 그래왔고 앞으로도 크게 바뀌지 않고 난이도만 조금씩 올라갈 것)

    //* 그렇다면 코딩테스를 준비하는 방법
        // 적절한 프로그래밍 언어를 선택하여 문법 공부하기; ['Python', 'C++', 'Java', 'JavaScript']
        // 알고리즘 유형별로 이론 및 핵심 문제를 10개 이상씩은 풀어보기
            // 대표적인 알고리즘 유형: 정렬, DFS/BFS, 구현, 완전 탐색, 탐욕 알고리즘
        // 원하는 기업의 기출(혹은 유사한) 문제 풀어보기

    //* 온라인 개발 환경
        // 코딩테스트를 공부할 때는 온라인상에서 제공되는 개발 환경을 사용할 수 있다.
        // 예시) https://replit.com



    //& 시간 복잡도 (Time complexity)
        // 시간 복잡도는 알고리즘의 성능을 나타내는 척도이다.
        //~ 시간 복잡도: 특정한 크기의 입력에 대하여 알고리즘의 수행시간 분석.
        // 동일한 기능을 수행하는 알고리즘이 있다면, 일반적으로 복잡도가 낮을 수록 우수하다.

    //&  빅오 표기법 (Big-O Notation) - (시간 복잡도를 수학적으로 수치를 표기할 수 있는 방법) 
        // (시간 복잡도를 수학적으로 수치를 표기방법 중에서) '가장 빠르게 증가하는 항'만을 고려하는 표기법이다.
        // 함수의 상한을 나타낸다.
        // 예를 들어 연산 횟수가 3N^3 + 5N^2 +1,000,000인 알고리즘이 있다고 하자.
        // 1 -> N이 증가함에 따라서, 3N^3을 제외한 다른 항의 영햑력은 작아진다.
        // 2 -> Big-O 표기법에서는 차수가 가증 큰 항에서 계수를 제외하여 O(N^3)으로 표현된다.
        // 이미치 참고 (Big-O Notation.png)
        // 시간복잡도는 계속해서 반복할 내용이니 처음부터 다 이해하지 못해도 괜찮음
    
    //& 시간 복잡도 예시 1)
        // N개의 데이터의 합을 계산하는 프로그램 예제

        let array = [3,5,1,2,4,] // 5개의 데이터(N=5)
        let summary = 0; // 합계를 저장할 변수
        // 모든데이터를 하나씩 확인하며 합계를 계산하는 코드
        for (let i = 0; i<array.length; i++) {
            summary += array[i]; // 더하기 연산이 5번 수행되면서 결과를 만들어낸다. 더하기 연산은 N의 가수에 비례하여 증가한다.
        }
        console.log(summary);
        // 즉 수행시간은 데이터의 개수 N에 비례할 것임을 예측할 수 있다.
        // -> 시간복잡도는 O(N) // O(오)의 N이다.

    //& 시간 복잡도 예시 2)
        // 2중 반복 문법을 이용하는 프로그램 예제

        for (let i = 0; i<array.length; i++){
            for (let j = 0; j<array.length; j++) {
                let temp = array[i] * array[j]; // i가 바뀔때마다 j는 5번 바뀌므로 5*5=25번의 연산이 수행되는 것을 알 수 있다.
                console.log(temp);
            }
        } 
        // 즉, 수행시간은 N의 제곱 만큼 늘어나게 되는 것을 예측할 수 있다.
        // -> 시간복잡도는 O(N^2)
        //~ 모든 2중 반복문이 제곱이되는 것은 아니며 소스코드가 내부적으로 다른 함수를 호출한다면 그 함수도 고려해야 할 것이다.


    //& 알고리즘 설계 Tip
        // 일반적인 CPU기반의 개인 컴퓨터나 채점 목적의 컴퓨터를 고려해 보자.
        // JavaScript를 기준으로 1억 번의 연산을 처리하기 위해 1~5초 가량 시간이 소요된다.
        // O(N^3)의 알고리즘을 설계한 경우, N의 값이 5,000이 넘는다면 얼마나 걸릴까?
        // 코딩 테스트 문제에서 시간 제한은 통상 1~5초 가량이다.
        //~ 문제에 명시되어 있지 않은 경우 대략 5초 정도라고 생각하고 문제를 푸는 것이 합리적이다.

    //& 요구사항에 따라 적절한 알고리즘 설계하기
        // 문제에서 가장 먼저 확인해야 하는 내용은 시간제한(수행 시간 요구사항)이다.
        // 시간 제한이 `1초`인 문제를 만났을 때, 일반적인 기준은 다음과 같다.
        // -> `N의 범위가 500인 경우`: 시간 복잡도가 O(N^3)인 알고리즘을 설계하면 문제를 풀 수 있다.
        // -> `N의 범위가 2000인 경우`: 시간 복잡도가 O(N^2)인 알고리즘을 설계하면 문제를 풀 수 있다.
        // -> `N의 범위가 100,000인 경우`: 시간 복잡도가 O(NlogN)인 알고리즘을 설계하면 문제를 풀 수 있다.
        // -> `N의 범위가 10,000,000인 경우`: 시간 복잡도가 O(N)인 알고리즘을 설계하면 문제를 풀 수 있다.

         