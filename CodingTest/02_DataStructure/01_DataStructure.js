// 핵심 자료구조 알아보기

    // 1) 자료구조란? (Data Structure)
        // 자료구조는 다수의 자료(Data)를 담기 위한 구조.
        // 데이터의 수가 많아질수록 효율적인 자료구조가 필요하다.
        // 예시) 학생 수가 1,000,000명 이상인 학생 관리 프로그램

    // 자료구조의 개요
        // 자료구조의 필요성에 대해서 이해할 필요가 있다.
        //~ 성능 비교: 자료구조/알고리즘의 성능 측정 방법에 대해 이해할 필요가 있다.

    // 자료구조의 종류
        /*
        1. 선형 구조 (linear data structure)
            - 배열 array
            - 연결 리스트 linked list
            - 스택 stack
            - 큐 queue
        2. 비선형 구조 (non-linear data structure)
            - 트리 tree
            - 그래프 graph
        */

    // 선형 자료구조 
        // 선형 자료구조는 하나의 데이터 뒤에 다른 데이터가 하나 존재하는 자료구조
        // 데이터가 일렬로 연속적으로(순차적) 연결되어 있다.
        // 예시) 배열, 연결리스트, 스택, 큐, 덱(deque)

    // 비선형 자료구조
        // 비선형 자료구조는 하나의 데이터 뒤에 다른 데이터가 여러 개 올 수 있는 자료구조
        // 데이터가 일직선 상으로 연결되어 있지 않아도 된다.
        // 예시) 트리, 그래프

    // 자료구조의 알고리즘
        // 효율적인 자료구조 설계를 위해 알고리즘 지식이 필요하다.
        // 효율적인 알고리즘을 작성하기 위해서 문제 상황에 맞는 적절한 자료구조가 사용되어야 할 것이다.
        //^ 프로그램을 작성할 때 자료구조와 알고리즘 모두 고려해야 한다.

    // 프로그램의 성능 측정 방법
        // 시간 복잡도(time complexity): 알고리즘에 사용되는 연산 횟수를 측정하는 것.
        // 공간 복잡도(space complexity): 알고리즘에 사용되는 메모리의 양을 측정하는 것.
        // 일반적으로 연산 횟수가 10억을 넘어가면 1초 이상의 시간이 소요된다.
        /* 예시)
            - n이 1,000일 때 계산
            1. O(n): 약 1,000번의 연산
            2. O(nlogn): 약 10,000번의 연산
            3. O(n^2): 약 1,000,000번의 연산
            4. 0(n^3): 약 1,000,000,000번의 연산
            */
        //^ 결국 알고리즘 설계시 더 낮은 시간 복잡도를 사용해야 할 것이다.
        //^ 공간을 많이 사용하는 대신 시간을 단축하는 방법이 흔히 사용된다.

    // 프로그램의 성능 측정 방법: Big-O 표기법
        // 복잡도를 표현할 때는 Big-O 표기법을 사용한다.
        // Big-O 표기법의 특징    
            // 1. 특정한 알고리즘이 얼마나 효율적인지 수치적으로 표현할 수 있다.
            // 2. 가장 빠르게 증가하는 항만을 고려하는 표기법이다.

        // ex 1)
        // 아래 알고리즘은 O(n)의 시간 복잡도를 가진다. 
        // n의 값에 따라 연산횟수가 달라지기 때문이다. (summary의 값이 변하더라도 연산의 횟수는 변하지 않는다)
            var n = 10;
            var summary = 0;
            for(var i = 0; i<n; i++) {
                summary += i;
            }
            console.log(summary);
        
        // ex 2)
        // 아래 알고리즘은 O(n^2)의 시간 복잡도를 가진다.
        // n의 값에 따라 연산 횟수가 제곱 횟수만큼 올라가기 때문이다.
            var n = 9;
            for (var i = 0; i<=n; i++) {
                for (var j=0; j<=i; j++) {
                    console.log(`${i} X ${j} = ${i*j}`);
                }
            }

    // 코딩 테스트에서 메모리의 크기를 나타낼 때는 일반적으로 MB 단위로 표기한다.
        // int a[1000] : 4KB
        // int a[1000000] : 4MB
        // int a[2000][2000] : 16MB 

    // 자료구조를 적절히 활용하기
        // 자료구조의 종류로는 스택, 큐, 트리 등이 있다.
        //^ 프로그램 작성할 때는 자료구조를 적절히 활용하여 시간 복잡도를 최소화하여야 한다.