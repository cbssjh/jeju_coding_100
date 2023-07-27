var arr = [200, 100, 300];

arr.pop();
arr.push(1000);
arr.push(300);
// splice 함수를 쓰면 더 좋다. 출처:https://gent.tistory.com/295
// arr.splice(2, 0, 10000); 
console.log(arr);