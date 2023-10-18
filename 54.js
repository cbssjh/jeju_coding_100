function sol(number){
    number.sort((a,b) => {
      return a-b; //오름차순 정렬
    });
  
    for (let i=0; i<number.length-1; i++){
      if(number[i]+1 !== number[i+1]){
        return 'NO';
      }
    }
    return 'YES';
  }
  
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(sol(n));