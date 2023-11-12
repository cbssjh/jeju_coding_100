// 답안참고
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
  };

  // 사용자 입력 받기
  const user_input = prompt('입력해주세요').split(' ');
  const start = user_input[0];
  const end = user_input[1];
  
  // BFS 알고리즘을 위한 큐와 방문한 노드를 저장할 배열 초기화
  let queue = [start];
  let visited = [start];
  
  // BFS 알고리즘 구현
  function solution() {
    let count = -1;
  
    while (queue.length !== 0) {
      count += 1;
      
      let size = queue.length;
  
      for (let i = 0; i < size; i++) {
        // 큐에서 노드 추출
        let node = queue.splice(0, 1);
        
        // 목표 노드에 도달했는지 확인
        if (node == end) {
          return count;
        }
  
        // 현재 노드의 이웃 노드들을 확인하고 방문하지 않은 경우 큐에 추가
        for (let next_node in graph[node]) {
          if (!visited.includes(graph[node][next_node])) {
            visited.push(graph[node][next_node]);
            queue.push(graph[node][next_node]);
          }
        }
      }
    }
  }
  
  console.log(solution());
  