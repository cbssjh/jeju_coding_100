const arr = prompt("tell me the numbers").split('').map((n) =>{
    return parseInt(n, 10);
});

arr.sort((a, b) => {
    return b-a; // 내림차순
});

console.log(arr[0]);