//답안 참고
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

// 예) 민수 민수 수진 경민 민지
for(let i in array){    
  let val = array[i];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;//삼항연산자
}

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});
//reduce는 배열의 각 요소에 대해 callback을 실행하며 단 1개의 출력 결과를 만듭니다.
//즉 배열 원소를 입력으로하여 1개의 수치 또는 문자열 또는 배열 또는 딕셔너리를 만듭니다.
//그래서 "줄이다"는 의미의 reduce 라는 이름을 얻었습니다.

//예를들어 배열 원소들의 전체 합을 구하거나 최대값을 구할 수 있습니다.
//또한 배열을 펼치거나 배열 원소들의 개수를 셀 수도 있습니다

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);