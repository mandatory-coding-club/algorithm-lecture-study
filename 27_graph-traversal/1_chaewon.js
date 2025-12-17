class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    //그래프 생성 매서드는 강의 제공 코드 사용
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    //여기부터 구현
    //재귀로 순회하기
    depthFirstRecursive(start)
    {
        let result = [];
        let visited = {}; //visited 객체를 갖는다
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex)
        {
            if(!vertex) return null;
            visited[vertex] = true; //방문 플래그 설정
            result.push(vertex);
            adjacencyList[vertex].forEach(
                neighbor => 
                {
                    if(!visited[neighbor]) return dfs(neighbor)
                }); //vertex의 인접 노드를 forEach문으로 각각 함수 실행
        })(start); //정의한 function의 첫 값으로 start값을 넣어서 실행.

        return result;
    }

    //반복으로 순회하기
    depthFirstIterative(start)
    {
        //stack, visited 를 갖고 순회를 관리한다.
        let stack = [start]; //첫 방문 노드
        let result = [];
        let visited = {};

        visited[start] = true;

        while(stack.length)
        {
            let currentVertex = stack.pop();
            result.push(currentVertex)

            //forEach이제 감이 잡히는 듯?!
            this.adjacencyList[currentVertex].forEach
            (
                neighbor =>
                {
                    if(!visited[neighbor])
                    {
                        visited[neighbor] = true; //stack에 push한 전적을 확인
                        stack.push(neighbor);
                    }
                }
            );
        }

        return result;

    }
    //너비우선 탐색하기
    breadthFirst(start)
    {
        //반복과 기타 부분 동일하되 stack 대신 queue사용
        let queue = [start];
        let result = [];
        let visited = {};

        visited[start] = true;

        while(queue.length)
        {
            let currentVertex = queue.shift();
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach
            (
                neighbor =>
                {
                    if(!visited[neighbor])
                    {
                        visited[neighbor] = true;
                        queue.push(neighbor);
                    }
                }
            );
        }

        return result;

    }
}



let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(g.depthFirstRecursive("A")); // ['A', 'B', 'D', 'E', 'C', 'F']
console.log(g.depthFirstIterative("A")); // ['A', 'C', 'E', 'F', 'D', 'B']
console.log(g.breadthFirst("A")); // ['A', 'B', 'C', 'D', 'E', 'F']