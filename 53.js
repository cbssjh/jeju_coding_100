//답안 참고
function mathBrackets(e){
    let count = 0;
    
    //괄호 개수가 같지 않으면 false
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            count++;
        }
        if (e[i] === ')'){
            count--;
        }
    }
    if (count !== 0){
        return false;
    }
    
    let bracket = [];
    for (let i in e){
        if (e[i] === '(') {
            bracket.push('(');
        }
            
        if (e[i] === ')') {
            if (bracket.length === 0) {
                return false;
            }
            bracket.pop();
        }   
    }
    return true;
}
    

const n = prompt('입력해주세요.').split('');

if (mathBrackets(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}