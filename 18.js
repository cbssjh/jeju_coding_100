const scores = prompt('Please tell me the scores.').split(' '); // 띄어쓰기로 구분해서 받기

var a = parseInt(scores[0], 10);
var b = parseInt(scores[1], 10);
var c = parseInt(scores[2], 10);

var total = a + b + c;
console.log(total);
console.log(Math.floor(total / 3));