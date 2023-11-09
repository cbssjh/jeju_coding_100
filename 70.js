// 결과 행렬
let c = [];
// a 배열의 첫 번째 행의 길이를 가져와서 len에 저장
const len = a[0].length;

// a와 b의 열과 행의 크기를 비교하여 행렬 곱셈이 가능한지 아닌지
// [2x3]과 [3x2]행렬은 행과 열 조건을 충족해 곱셈이 가능하지만, [2x3]과 [2x3] 행렬은 곱셈이 불가능
if (len === b.length) {
    for (let i = 0; i < len; i++) {
        // 현재 행의 결과를 저장할 빈 배열 생성
        let row = [];
        for (let j = 0; j < len; j++) {
            let x = 0;
            for (let k = 0; k < len; k++) {
                //a[i][k]는 행렬 a에서 i 행과 k 열의 요소
                //b[k][j]는 행렬 b에서 k 행과 j 열의 요소
                x += a[i][k] * b[k][j];
            }
            // 현재 열의 결과를 row 배열에 추가
            row.push(x);
        }
        // 현재 행의 결과를 결과 행렬 c에 추가
        c.push(row);
    }
    return c;
} else {
    // 행렬 곱셈이 안된다면 -1 반환
    return -1;
}

// 주어진 두 행렬 a와 b
const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));
