const n = prompt("줄이고 싶은 말을 정해주세요").split(" ");
let result = '';

for (let s of n){
    result += s.slice(0, 1);
  }
  
  console.log(result);
