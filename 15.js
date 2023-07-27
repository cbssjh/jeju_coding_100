// 이제 내장 라이브러리인 readline을 이용해보자 (참고 : https://velog.io/@seongmini/Node.js-Vscode%EC%97%90%EC%84%9C-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0)

// readline 모듈을 불러온다.
const readline = require('readline');

// 인터페이스 객체를 생성해준다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('이름을 입력하세요: ', (name) =>{
    console.log('안녕하세요. 저는 ${name}입니다.');
    rl.close();
});