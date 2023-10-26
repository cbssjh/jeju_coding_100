const user = new String(prompt('문자열을 입력하세요'));
let result = '';
let store = user[0];
let count = 0;

for (let i of user){
  if (i === store){
    count += 1;
  } else{
    result += store + String(count);
    store = i;
    count = 1;
  }
}

result += store + String(count);
console.log(result);