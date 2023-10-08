//예를 들어 90 80 95 40 100

const scores = prompt('점수입력').split(' ').map(function(n){
    return parseInt(n, 10); //10진수로 변환하여 scores 변수에 할당
  });
  
  scores.sort((a, b) => {
    return a-b; //오름차순 정렬 (큰 순서대로)
  });
  
  let count = 0;
  let arr = [];
  
  while (arr.length < 3) {
    let n = scores.pop(); // 마지막 요소를 하나씩 지우면서 n에 저장
    if (!arr.includes(n)){
      arr.push(n);
    }
    count += 1;
  }
  
  console.log(count);