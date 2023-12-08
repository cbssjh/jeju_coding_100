// 답안 참고
function solution(n){
    // 초기값으로 '1'을 할당
    let answer = '1';

    // 입력값이 1일 경우 바로 1을 반환
    if(n === 1){
        return 1;
    }

    // 반복문을 통해 n번째까지 규칙에 따라 문자열을 생성
    for (let i = 1; i < n; i++){
        answer = rule(answer); // 이전 결과값을 규칙 함수에 넣어 새로운 결과값을 얻음
    }

    return answer;
}

// 주어진 문자열에 대해 규칙을 적용하여 새로운 문자열을 반환하는 함수 정의
function rule(answer){
    let answerMax = 9; // 숫자는 1부터 9까지만 고려
    let result = ''; // 새로운 결과값을 저장할 변수 초기화

    // 1부터 9까지 반복하면서 주어진 문자열에 해당 숫자가 몇 번 등장하는지 확인
    for (let i = 1; i < answerMax; i++){
        let re = new RegExp(i, 'g'); // 정규 표현식을 사용하여 해당 숫자에 대한 패턴 생성
        let count = (answer.match(re) || []).length; // 문자열에서 해당 패턴의 등장 횟수 계산

        // 등장 횟수가 1 이상일 경우, 결과 문자열에 숫자와 등장 횟수를 이어 붙임
        if(count >= 1){
            result = result + String(i) + String(count);
        } 
    }

    return result;
}

// 테스트 입력값
const user_input = 7;

// 결과 출력
console.log(solution(user_input));
