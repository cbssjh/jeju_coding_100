// 답안참고
const graph = {
    1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]
};

// 시작 노드와 끝 노드에 대한 사용자 입력 받음
const user_input = prompt('입력해주세요').split(' ');
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

// 시작 노드로 초기화된 큐와 빈 방문한 노드 배열을 정의
let queue = [start];
let visited = [];

// 재귀함수
function sol(n, visited) {
    // 현재 경로에서 마지막 노드를 가져옴
    let node = n[n.length - 1];
    let length = 0;

    // 현재 노드가 목적지 노드(끝)인지 확인
    if (node == end) {
        return visited.length; // 방문한 노드의 길이를 반환
    }

    // 현재 노드가 이전에 방문한 노드인지 확인
    if (visited.includes(node)) {
        return visited.length; // 방문한 노드의 길이를 반환
    } else {
        visited.push(node); // 현재 노드를 방문한 것으로 표시
    }

    let max = [];

    // 현재 노드의 이웃을 탐색
    for (let next_node in graph[node]) {
        n.push(graph[node][next_node]); // 이웃을 현재 경로에 추가

        max.push(length, sol(n, visited)); // 재귀적으로 이웃을 탐색

        length = Math.max.apply(null, max); // 최대 길이를 업데이트
        queue.pop(); // 현재 경로의 마지막 노드 제거
    }

    return length; // 방문한 노드의 최대 길이를 반환
}

// 결과 출력
console.log(sol(queue, visited));
