// 주어진 문자열에서 괄호의 쌍이 올바르게 매치되어 있는지 확인하는 함수
function sol(d) {
    let step = 0;

    // 문자열을 순회하면서 괄호의 쌍을 확인
    for (let i in d) {
        if (d[i] === "(") {
            step += 1; // 여는 괄호일 경우 step을 1 증가
        } else if (d[i] === ")") {
            step -= 1; // 닫는 괄호일 경우 step을 1 감소
        }
    }

    // 괄호의 쌍이 맞지 않는 것
    if (step !== 0) {
        return false;
    }

    // step이 0이면 괄호의 쌍이 맞는 것
    if (step === 0) {
        return true;
    }
}

// 무한 루프를 통해 사용자에게 입력을 받고 결과를 출력
while (1) {
    const n = prompt('데이터 입력(1), 프로그램 종료(2)');
    
    // 사용자가 1을 선택한 경우
    if (n === '1') {
        const str = prompt('데이터를 입력하세요').split(''); // 문자열을 입력받고 배열로 변환
        console.log(sol(str)); // 결과를 출력
    } else {
        break; // 사용자가 2를 선택한 경우 루프 종류
    }
}
