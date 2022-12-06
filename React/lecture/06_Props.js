//! Props (Properties)

// props를 통해 컴포넌트간 데이터를 전달할 수가 있다.
// 상속되는 부모 컴포넌트로부터 자녀컴포넌트에 데이터등을 전달하는 방법이다.
// props는 읽기전용(immutable)이며 자녀 컴포넌트 입장에서는 변하지 않는 값이다.
// 변경이 필요하다면 부모 컴포넌트에서 state를 변경해주어야 한다.

// 현재 tictactoe 프로젝트에서 보면, 
// Board comp -> Square comp로 props하는 것(데이터를 전달하는 것)이라고 볼 수 있다.
// Board.js 파일 <Square value={i}/> -> Square.js 파일 {this.props.value}
