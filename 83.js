//답안 참고

function math(e) {
    // 닫힌, 열린 괄호 간의 매핑을 정의
    const m = {
        ')': '(',
        '}': '{',
    };
    // 스택으로 사용할 빈 배열을 초기화
    let stack = [];

    for (let i = 0; i < e.length; i++) {
        // 현재 문자가 여는 괄호인지 확인
        if (e[i].includes('(') || e[i].includes('{')) {
            // 열린 괄호를 스택에 추가
            stack.push(e[i]);
        } else if (m[e[i]]) {
            // 현재 문자가 닫힌 괄호이고 해당하는 열린 괄호가 있는지 확인
            if (stack.length === 0) {
                // 스택이 비어있다면 매칭되는 열린 괄호가 없으므로 false를 반환
                return false;
            } else {
                // 스택에서 마지막 요소를 꺼내와서 해당 열린 괄호와 일치하는지 확인
                let t = m[e[i]];
                if (t != stack.pop()) {
                    // 일치하지 않으면 false 반환
                    return false;
                }
            }
        }
    }
    // 스택에 남아있는 열린 괄호가 있는지 확인
    return stack.length === 0;
}

// 사용자가 프로그램을 종료할 때까지 반복하는 while 루프
while (1) {
    const order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order === '1') {
        // 데이터 입력을 선택한 경우, 수학 표현식을 입력하도록 안내하고 문자 배열로 변환
        const ex = prompt('데이터를 입력하세요').split('');
        // 'math' 함수를 호출하여 괄호의 균형 여부를 확인하고 결과를 콘솔에 출력
        console.log(math(ex));
    } else {
        // 프로그램 종료를 선택한 경우 while 루프를 종료
        break;
    }
}
