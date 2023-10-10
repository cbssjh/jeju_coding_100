let a = prompt('10진수를 입력해주세요.')
let b = [];
let result = '';

while (a){ // a변수가 0이 아닌 한 계속 반복한다. (사용자가 입력하는 동안)
	b.push(a % 2); // b 배열에 a를 2로 나눈 나머지 값을 추가한다.
	a = parseInt(a / 2, 10); // a의 값을 2로 나눈 몫을 다시 a에 할당.
}
b.reverse();

b.forEach((n) => {
  result += n;
})

console.log(result);