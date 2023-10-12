const d = new Date();

let year = d.getTime(); //1970년 1월 1일 00:00:00부터 현재까지의 밀리초 수
year = Math.floor(year/(3600*24*365*1000))+1970
// year의 값을 3600(시간), 24(시간), 365(일), 1000(밀리초)으로 나누고, 
// 그 결과를 소수점 이하를 버린 정수로 변환하기 위해 Math.floor 함수를 사용합니다. 
// 이렇게 계산된 값은 현재 연도에서 1970년 1월 1일 이후의 연도 차이를 나타냅니다. 그리고 1970을 더하여 현재 연도를 계산합니다.

console.log(year);