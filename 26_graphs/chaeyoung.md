# GRAPHS 

그래프(Graph)는 정점과 간선으로 이루어진 자료구조

* **정점 (Vertex)**: 데이터를 담고 있는 점
* **간선 (Edge)**: 정점과 정점을 연결하는 선
* Weighted / Unweighted : 간선의 거리나 비용이 있는지 여부  
* Directed / Undirected : 방향성이 있는지 여부       

### 어디에 쓰이나?

그래프는 거의 모든 데이터 관계를 표현할 수 있음  
예) SNS 친구 관계 (예: “People you might know”), 지도 / 경로 탐색 (Navigation), 추천 시스템 (Netflix, Amazon), 파일 시스템 구조, 웹 링크 구조, 네트워크 연결

### 종류

- Directed (유향 그래프) : 간선에 방향이 존재함 (A → B ≠ B → A)
- Undirected (무향 그래프) : 간선에 방향이 없음 (A — B 동일)
- Weighted (가중 그래프) : 간선에 비용/거리 등의 가중치 존재
- Unweighted (비가중 그래프) : 간선에 추가 정보 없음       


### 표현 방법

그래프는 크게 두 가지 방법으로 표현 가능  
대부분의 실제 데이터는 Adjacency List로 구현  
(희소 그래프가 많기 때문)


| 연산            | Adjacency List | Adjacency Matrix |
| :------------ | :------------: | :--------------: |
| 특징 |공간 효율적 (특히 sparse graph일 때) <br> 모든 edge 순회가 빠름 <br> 특정 edge 탐색은 느림|공간 비효율적 (V² 공간 필요) <br> 특정 edge 탐색이 빠름 (O(1))|
| Add Vertex    |      O(1)      |       O(V²)      |
| Add Edge      |      O(1)      |       O(1)       |
| Remove Vertex |    O(V + E)    |       O(V²)      |
| Remove Edge   |      O(E)      |       O(1)       |
| Query         |    O(V + E)    |       O(1)       |
| Storage       |    O(V + E)    |       O(V²)      |

### 코드 예제 (Adjacency List)

```js
class Graph {
    constructor(){
        this.adjacencyList = {};
    }

    // 정점 추가
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    // 간선 추가 (무향 그래프)
    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // 간선 제거
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    // 정점 제거
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

// 정점추가, 간선추가 예시
let g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g.adjacencyList);


// {
//   "Dallas": ["Tokyo", "Aspen", "Hong Kong"],
//   "Tokyo": ["Dallas", "Hong Kong"],
//   "Aspen": ["Dallas", "Los Angeles"],
//   "Los Angeles": ["Hong Kong", "Aspen"],
//   "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"]
// }


// 간선 제거 예시

g.removeEdge("Dallas", "Tokyo");
console.log(g.adjacencyList);

//{
//  "Dallas": ["Aspen", "Hong Kong"],
//  "Tokyo": ["Hong Kong"],
//  "Aspen": ["Dallas", "Los Angeles"],
//  "Los Angeles": ["Hong Kong", "Aspen"],
//  "Hong Kong": ["Tokyo", "Dallas", "Los Angeles"]
//}
 
// 정점 제거 예시

g.removeVertex("Hong Kong");
console.log(g.adjacencyList);

// {
//   "Dallas": ["Aspen"],
//   "Tokyo": [],
//   "Aspen": ["Dallas", "Los Angeles"],
//   "Los Angeles": ["Aspen"]
// }
```
