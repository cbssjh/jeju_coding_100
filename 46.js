let arr = [];
let sum = 0;

for (let i = 0; i < 20; i++){
    arr[i] = i + 1;
}

arr.forEach((n) => { //arr배열의 각 요소에 대해 순회하면서 콜백 함수를 실행합니다. 콜백 함수는 각 요소를 매개변수 n으로 받아옵니다.
    while(n !== 0){
      sum += (n % 10); // 일의 자리
      n = Math.floor(n/10); // n의 일의 자리 숫자를 제거 -> 다음 자리 숫자를 처리하기 위하여..
    }
  })
  
console.log(sum);