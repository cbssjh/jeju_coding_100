// 답안참고
function sol(n) {
    let answer = 0; // 결과를 저장할 변수 초기화
    let count = 1; // 자릿수를 표현하는데 사용할 변수 초기화
    const d = {3: 1, 6: 2, 9: 3}; // 자릿수 마다 369 배치
    
    while (n.length !== 0) {
        // 배열의 마지막 요소를 꺼내와 정의된 변환 규칙을 이용하여 결과에 더함
        // count 변수를 사용하여 자릿수를 증가
        answer += d[parseInt(n.pop(), 10)] * count;
        count *= 3; // 자릿수 3배씩 증가
    }

    return answer; 
}

// 입력 받음
const user_input = new String(prompt('입력해주세요')).split('');
console.log(sol(user_input));
