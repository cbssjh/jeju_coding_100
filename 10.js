// vscode같은 코드편집기 말고 웹 브라우저 환경에선 가능한 방법
// const n = prompt('숫자를 입력하세요');
const n = 5;
var tree = '';

for (var i = 1; i <= n; i++){
    var star = '';
    for (var j = 1; j <= n-i; j++){
        star += ' ';
    }
    for (var k = 1; k <= 2*i-1; k++){
        star += '*';
    }
    tree += star + '\n';
}
console.log(tree);

// 해설 참조해서 해결.. 아직도 별찍기 문제를 한번에 풀지 못한다. 연습이 필요.