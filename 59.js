const str = prompt('문자열을 입력해주세요.');

const n = 25 + parseInt((str.length/2), 10);

//왼쪽부터 채우기
const a = str.padStart(n, '='); 

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, '='));
