function combination(chars) {
    let combi = [];

    // 재귀 함수 정의
    const f = (prefix, chars) => {
        for (let i = 0; i < chars.length; i++) {
            // 현재 문자를 prefix에 추가하여 조합 생성
            combi.push(prefix + chars[i]);

            // 재귀 호출을 통해 다음 문자들로 조합 생성
            f(prefix + chars[i], chars.slice(i + 1));
        }
    }

    // 초기 호출
    f('', chars);

    // 조합의 길이가 주어진 수와 일치하는 것만 추출
    const result = combi.filter(x => x.length === n);
    console.log(result);

    // 조합의 수 반환
    return result.length;
}

// 사용자로부터 입력 받기
const arr = prompt('입력해주세요').split(',');
const n = parseInt(prompt('조합의 수를 입력해주세요'), 10);

// 결과 출력
console.log(combination(arr));
