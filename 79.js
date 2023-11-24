// 답안 참고

function rotate(a, t) {
    let b = a.slice();

    // 회전 연산을 수행
    for (let i = 0; i < t; i++) {
        b.unshift(b.pop());
    }

    // 차이의 절댓값을 저장할 배열 c를 초기화
    let c = [];

    // 각 원소의 차이의 절댓값을 계산하여 배열 c에 저장
    for (let i in a) {
        c.push(Math.abs(a[i] - b[i]));
    }

    // 배열 c에서 최솟값을 찾음
    const m = Math.min.apply(null, c);

    // 최솟값의 인덱스를 찾음
    let index = c.indexOf(m);

    console.log("index :", index);
    console.log("value :", a[index], b[index]);
}

const l = [10, 20, 25, 27, 34, 35, 39];

// 횟수를 사용자에게 입력받음
const turn = prompt('순회 횟수는?');

rotate(l, turn);
