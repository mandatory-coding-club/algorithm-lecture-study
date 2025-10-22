# Graph Traversal
그래프의 모든 정점을 “방문(visit) / 갱신(update) / 확인(check)” 하는 과정.

**주요 활용 예시**  
P2P 네트워킹, 웹 크롤러, 추천 시스템 (가장 가까운 유사도 탐색), 최단 경로 탐색 (Shortest Path), GPS 내비게이션, 미로 문제 해결, AI 게임 경로 탐색

## DFS (재귀)

재귀 호출을 통해 그래프를 깊이 우선으로 순회  
(한 경로를 끝까지 탐색한 후 백트래킹(backtracking)하는 방식)

1. **함수는 시작 노드(starting node)** 를 인자로 받는다.
2. **결과(result)** 를 담을 배열을 만든다.
3. **방문 여부(visited)** 를 저장할 객체를 만든다.
4. **헬퍼 함수(helper)** 를 정의한다.

   * 비어있다면(`!vertex`) 바로 리턴.
   * 현재 정점을 방문 처리(`visited[vertex] = true`)하고 결과 배열에 넣는다.
   * 현재 정점의 모든 인접 노드를 순회하면서,
     방문하지 않은 노드면 **재귀적으로 DFS 호출.**
5. 헬퍼 함수를 시작 노드로 호출.
6. 결과 배열을 반환한다.


### DFS (재귀) 예제 코드

```js
depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor]){
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
}
```


## DFS (반복 / Iterative)

명시적인 스택을 이용해 재귀 호출 없이 깊이 우선 탐색을 수행하는 비재귀적 구현 방식.  

1. 시작 노드를 스택(stack)에 추가한다.
2. 결과(result) 배열과 방문(visited) 객체를 만든다.
3. 스택이 빌 때까지 반복한다.

   * 스택에서 정점을 꺼낸다.
   * 방문하지 않았다면 방문 처리 후 결과에 추가한다.
   * 인접 노드들을 스택에 추가한다.
4. 결과 배열을 반환한다.


### DFS (반복) 예제 코드

```js
depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor);
           } 
        });
    }
    return result;
}
```


## BREADTH FIRST SEARCH (BFS)

큐를 사용해 시작 정점으로부터 가까운 노드(레벨 순)부터 차례로 탐색하는 너비 우선 순회 방식.  

1. **시작 노드**를 큐(queue)에 넣는다.
2. 결과(result) 배열과 방문(visited) 객체를 만든다.
3. 큐가 빌 때까지 반복한다.

   * 큐의 첫 번째 요소를 꺼낸다(`shift()`).
   * 결과 배열에 추가한다.
   * 인접 노드를 순회하면서 방문하지 않은 노드를
     방문 처리 후 큐에 추가한다.
4. 결과 배열을 반환한다.

### BFS 예제 코드

```js
breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
    return result;
}
```

## 예제 그래프

```js
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


// 그래프 구조 시각화


         A
       /   \
      B     C
      |     |
      D --- E
       \   /
         F
```


### 순회 결과 예시

| Traversal Type | Visiting Order        |
| -------------- | --------------------- |
| **DFS (재귀)**   | A → B → D → E → C → F |
| **DFS (반복)**   | A → C → E → F → D → B |
| **BFS**        | A → B → C → D → E → F |
