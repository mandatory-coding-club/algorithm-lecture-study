class WeightedGraph {
    //그래프 기본 코드는 강의 코드 그대로 사용
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    //시작 지점부터 끝 지점까지의 최단 거리를 계산한다
    Dijkstra(start, finish)
    {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};

        let path = []; //최종 경로 반환할 결과값
        
        let smallest;

        //초기 조건 설정
        for(let vertex in this.adjacencyList)
        {
            //인자로 받은 start 노드 거리와 우선순위 0 설정
            if(vertex === start)
            {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            //기타 node에 기본 infinity 설정해서 거리 object와 우선순위큐에 추가
            else
            {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            //모든 노드의 '직전 노드'도 없음으로 초기 설정
            previous[vertex] = null;
        }

        //우선 순위 큐. 방문할 nodes가 있을 동안
        while(nodes.values.length)
        {
            smallest = nodes.dequeue().val; //(첫 반복에는 start node로 실행)
            //마지막 노드까지 도달했을 때
            if(smallest === finish)
            {
                while(previous[smallest])
                {
                    //경로의 마지막 노드부터 이전 노드 순으로 path에 push
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            //smallest가 유효한 노드일 때 (현재 묶음에서 접근할 수 있다)
            //강의 예제 코드는 if로 되어있으나, else if로 처리함
            else if(smallest && distances[smallest] !== Infinity)
            {
                //빼낸 nodes의 이웃 nodes 순회
                for(let neighbor in this.adjacencyList[smallest])
                {
                    //이웃 노드 할당
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    let nextNeighbor = nextNode.node;

                    let candidate = distances[smallest] + nextNode.weight;

                    //새로운 거리 값 갱신을 위해
                    //기존 거리와 신규 노드 추가 후 거리 비교
                    if(candidate < distances[nextNeighbor])
                    {
                        //해당 노드까지 거리값 갱신
                        distances[nextNeighbor] = candidate;
                        //해당 노드의 직전 노드 갱신
                        previous[nextNeighbor] = smallest;
                        //갱신된 거리값으로 큐에 넣기
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        //마지막 노드부터 push했으니 역순으로 반환
        return path.concat(smallest).reverse();
    }
}

//우선 순위 큐는 강의 코드 그대로 복사
class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E")); //[ 'A', 'C', 'D', 'F', 'E' ]