const n = prompt('type the number you want to get 구구단');
let result = '';

for (let i=1; i<10; i++){
    result += n * i + " ";
}

console.log(result);