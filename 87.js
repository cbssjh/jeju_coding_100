// 답안 참고
// 예시 입력
const playerNames = "손오공 야모챠 메지터 비콜로".split(" ");
const bowls = "70 10 55 40".split(" ");
console.log(bowls);

// bowls를 정수로 변환하여 새로운 배열에 저장
const point_int = bowls.map(a => parseInt(a, 10));
console.log(point_int);

// 주어진 이름과 포인트 배열을 받아서 결과를 반환하는 함수 정의
function sol(playerNames, bowls) {
  // 빈 배열을 선언하여 객체 형태로 이름과 포인트를 저장
  let temp = [];
  for (let i of playerNames) {
    let obj = {};
    obj['playerNames'] = i;
    obj['value'] = bowls[playerNames.indexOf(i)];
    temp.push(obj);
  }

  // 포인트 값을 기준으로 정렬 (내림차순)
  temp.sort(function (a, b) {
    return a.value < b.value ? 1 : a.value > b.value ? -1 : 0;
  });

  // 정렬된 결과를 출력
  console.log(temp);

  // 결과를 저장할 객체 선언
  let result = {};
  for (let i of temp) {
    // 이름을 키로 하고, 순위를 값으로 하는 객체 생성
    result[i['playerNames']] = temp.indexOf(i) + 1;
  };

  // 최종 결과 반환
  return result;
}

// 함수를 호출하고 결과 출력
console.log(sol(playerNames, point_int));
