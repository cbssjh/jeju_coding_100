// 답안 참고
// 정사각형 크기와 탐색 가능 지역 크기 설정
let 사각형 = 5;
let 탐색가능지역 = 3;

// 2차원 배열 지뢰밭
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

// 초기화
let iadd = 0;
let jadd = 0;
let value = 0;
let valueArray = [];

// 탐색 시작
for (let iadd = 0; iadd <= 사각형 - 탐색가능지역; iadd++) {
  for (let jadd = 0; jadd <= 사각형 - 탐색가능지역; jadd++) {
    for (let i = iadd; i <= 탐색가능지역 - 1 + iadd; i++) {
      for (let j = jadd; j <= 탐색가능지역 - 1 + jadd; j++) {
        // 현재 위치의 값을 누적
        value += 지뢰밭[i][j];
      }
    }
    // 누적된 값 배열에 추가
    valueArray.push(value);
    console.log("---------");
    value = 0; // 값 초기화
  }
  console.log("!!!!!!!");
}

// 최댓값 출력
console.log(valueArray);
console.log(Math.max.apply(null, valueArray));
