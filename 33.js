const data = prompt('Type numbers.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);