User
// 답안참고
// 주어진 문자열
let value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";

// 각 행을 개행 문자('\n')를 기준으로 분할하여 배열로 만듦
let sp = value.split('\n');

// 각 행에서 '1'을 'f'로 대체하고 공백을 기준으로 분할하여 배열을 만들기 위한 작업
let count = 0;
for (let i of sp) {
  sp[count] = i.replace('1', 'f').split(' ');
  count += 1;
}

// 다시 초기화된 count 변수를 사용하여 각 'f'를 찾아 주변의 값을 '*'로 대체하는 작업
count = 0;
let search = 0;

// 각 행 순회
for (let s of sp) {
  // 각 행에서 'f'를 찾아서 주변 값을 '*'로 대체
  for (let i of s) {
    if (i === 'f') {
      // 'f'의 인덱스를 찾음
      search = s.indexOf(i);
      
      // 왼쪽 이웃이 존재하면 '*'로 대체
      if (search > 0) {
        s[search - 1] = '*';
      }
      
      // 오른쪽 이웃이 존재하면 '*'로 대체
      if (search < 4) {
        s[search + 1] = '*';
      }
      
      // 현재 행의 위쪽 행에서 '*'로 대체
      if (count > 0) {
        sp[count - 1][search] = '*';
      }
      
      // 현재 행의 아래쪽 행에서 '*'로 대체
      if (count < 4) {
        sp[count + 1][search] = '*';
      }
    }
  }
  count += 1;
}

for (let i of sp) {
  console.log(i);
}
