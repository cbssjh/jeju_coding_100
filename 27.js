const keys = prompt('Tell me the names').split(' ');
const values = prompt('Tell me the scores').split(' ');

// 답안 참고
const obj = {};

for (let i=0; i<keys.length; i++) {
    obj[keys[i]] = parseInt(values[i], 10);
  }
// 이렇게 값을 주는구나..
  console.log(obj);