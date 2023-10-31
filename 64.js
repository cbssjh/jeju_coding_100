let N = parseInt(prompt('정량을 입력하세요'), 10);
let result = 0;

while (true){ // 무한루프
// 만약 정량(N)을 7로 나눈 나머지가 0이라면, 7의 배수.
  if (N % 7 === 0){   
    result += parseInt(N / 7, 10);
    console.log(result);
    break; // 무한루프니깐 break
  }

  // 7로 나누어 떨어지지 않는 경우엔, N에서 3을 뺀다.
  N -= 3;

  result += 1; // 1 증가

  // N이 0보다 작아지면, -1 출력
  if (N < 0){
    console.log(-1);
    break;
  }
}