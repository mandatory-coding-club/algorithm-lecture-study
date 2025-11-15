//무향 그래프 노드와 간선 추가, 삭제 매서드 작성하기

class Graph
{
    constructor()
    {
        this.adjacencyList = {};
        //저장 형태
        //{vertex : [v2, v1]} 노드와 연결된 노드의 목록
    }

    addVertex(vertex)
    {
        //이미 추가된 노드가 아닌 경우, 빈 리스트로 추가
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2)
    {
        //v1과 v2를 잇는 간선 추가하기
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeVertex(vertex)
    {
        //해당 노드와 연결된 노드 목록 확인,
        //누 노드간 간선 지우기
        while(this.adjacencyList[vertex].length) //while문 조건 설정 잘못해서 오류 났었음!
        {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        //해당 노드 지우기
        delete this.adjacencyList[vertex];
    }

    removeEdge(v1, v2)
    {
        //v1, v2를 잇는 간선 삭제하기

        //v1과 연결된 노드 목록 중 v2 제거
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        //v2과 연결된 노드 목록 중 v1 제거
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);

    }
}

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
g.removeEdge("Dallas", "Tokyo");
console.log(g.adjacencyList);
g.removeVertex("Hong Kong");
console.log(g.adjacencyList);