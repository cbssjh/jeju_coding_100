const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E', 'F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  
  // 답안 참고
  function bfs(graph, start) {
    let visited = [];
    let queue = [start];
  
    // 큐가 비어 있을 때까지 반복
    while (queue.length !== 0) {
      // 큐의 맨 앞에서 노드를 빼옴
      let n = queue.shift();
  
      // 노드가 방문되지 않았는지 확인
      if (!visited.includes(n)) {
        // 노드를 방문한 것으로 표시
        visited.push(n);
  
        // 현재 노드의 방문하지 않은 이웃을 가져옴
        let sub = graph[n].filter(x => !visited.includes(x));
  
        // 방문하지 않은 이웃을 큐에 추가
        for (let i of sub) {
          queue.push(i);
        }
      }
    }
    
    return visited;
  }

  console.log(bfs(graph, 'E'));
  