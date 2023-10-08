const words = prompt('고칠 문장을 적으세요').split('');

for (let i = 0; i < words.length; i++){
    if(words[i] === 'q'){
        words[i] = 'e'; //== 연산자 대신 = 대입 연산자를 사용해야 합니다. 코드에서 ==를 사용하면 값이 비교되고, 해당 값이 true 또는 false로 평가됩니다. 따라서 =을 사용하여 실제로 값을 변경해야 합니다.
    }
    continue;
}
console.log(words);