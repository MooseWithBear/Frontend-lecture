// 스택(Stack)
    //~ 스택이란?
        // 스택은 먼저 들어온 데이터가 나중에 나가는 자료구조를 말한다.
        // 흔히 박스가 쌓인 형태를 스택(Stack)이라고 한다.
        // 우리가 박스를 쌓은 뒤에 꺼낼 때는, 가장 마지막에 올렸던 박스부터 꺼내야 한다.
        // 새로운 원소를 삽입할 때에도 당연히 마지막 위치에 삽입하게 된다.
        // 새로운 원소를 삭제할 때에도 마지막 원소가 삭제된다.
        
        // 예시)
            // 전체 연산 : 삽입 3 - 삽입 5 - 삭제 - 삽입 7 - 삭제 - 삽입 8 - 삭제 - 삽입 2 - 삽입 9
            /*
                1. 3 삽입
                2. 5 삽입
                3. 5 삭제됨
                4. 7 삽입
                5. 7 삭제됨
                6. 8 삽입
                7. 8 삭제됨
                8. 2 삽입
                9. 9 삽입
                -> 9 2 3
            */
    
    //~ 스택 자료구조의 시간 복잡도
        // 삽입 (push) : O(1) : 스택에 원소를 삽입하는 연산
        // 추출 (pop)  : O(1) : 스택에서 원소를 추출하는 연산
        // 최상의 원소 (top) : O(1) : 스택의 최상위 원소(마지막에 들어온 원소)를 확인하는 연산자
        // Empty : O(1) : 스택이 비어있는지 확인하는 연산

    //~ JavaScript에서 스택을 구현하는 방법 - 배열 자료형
        // JavaScript의 기본적인 배열 자료형은 다음의 두 가지 메서드를 제공한다.
        // push() 메서드: 마지막 위치에 원소를 삽입하며, 시간 복잡도는 𝑂(1)이다.
        // pop() 메서드: 마지막 위치에서 원소를 추출하며, 시간 복잡도는 𝑂(1) 이다.