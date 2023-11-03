//답안 참고
function solution(n){
    let 사람 = 0;
    let 총악수 = 0;
    let temp = 0;

    while(true){ // 무한 루프
      총악수 = parseInt((사람*(사람-1))/2, 10);
      
      if(n < 총악수){
        break;
      }
      temp = 총악수;
      사람 += 1;
    }
    return [parseInt(n-temp, 10), 사람];
  }
  
  const 입력악수 = parseInt(prompt('총 악수 횟수를 적어주세요'), 10);
  console.log(solution(입력악수));
