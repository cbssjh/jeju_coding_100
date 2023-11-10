const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  
  // 답안 참고
  function dfs(graph, start){
    let visited = [];
    let stack = [start];
  
    // 스택이 비어 있을 때까지 반복
    while (stack.length !== 0){
      let n = stack.pop(); // 스택에서 마지막 요소를 빼오기 
      if (!visited.includes(n)){
        visited.push(n);
        let sub = graph[n].filter(x => !visited.includes(x));
        for(let i of sub) {
          stack.push(i);
        }
      }
    }
    return visited;
  }
  
  
  console.log(dfs(graph, 'E')); // 시작 노드 E