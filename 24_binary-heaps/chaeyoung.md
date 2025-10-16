
# Binary Heaps

* 힙(Heap) 은 트리 기반의 자료구조(Tree-based structure)
* 완전 이진 트리(Complete Binary Tree) 형태를 가짐.  
  (완전 이진 트리란? 노드가 왼쪽부터 차곡차곡 채워지는 형태로 트리의 각 레벨이 왼쪽에서 오른쪽으로 순차적으로 채워짐)
* 정렬된 구조는 아니지만,
  루트(root)에 가장 큰 값(또는 가장 작은 값)이 위치하도록 되어 있음.

즉 힙은 빠르게 최댓값 혹은 최솟값을 꺼내기 위한 트리형 데이터 구조

### 종류

* Max Binary Heap (최대 힙)  
  부모 노드의 값이 자식보다 항상 크거나 같음 (루트에 최댓값)

* Min Binary Heap (최소 힙)  
  부모 노드의 값이 자식보다 항상 작거나 같음 (루트에 최솟값)

### 배열로 힙 저장하기
완전 이진 트리의 규칙적인 구조 덕분에 인덱스 계산으로 부모/자식 관계를 알 수 있음.  
그래서 배열로도 쉽게 표현 가능하다.  

| 인덱스 관계     | 인덱스 공식                    |
| ------ | ------------------------- |
| 부모 노드  | `Math.floor((i - 1) / 2)` |
| 왼쪽 자식  | `2 * i + 1`               |
| 오른쪽 자식 | `2 * i + 2`               |







## Insert

1️. 새 값을 배열의 끝에 추가
2️. 부모와 크기 비교하며 위치 이동 (버블업)

예제 코드

```js
class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0){
      let parentIdx = Math.floor((idx - 1)/2);
      let parent = this.values[parentIdx];
      if(element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}
```

## Extracting Max (삭제)

힙에서 최댓값(루트)을 제거하고 재정렬

1️. 루트 제거
2️. 마지막 원소를 루트로 옮김
3️. 자식과 비교하며 위치 이동 (sinkDown)

예제 코드

```js
extractMax(){
  const max = this.values[0];
  const end = this.values.pop();
  if(this.values.length > 0){
    this.values[0] = end;
    this.sinkDown();
  }
  return max;
}

sinkDown(){
  let idx = 0;
  const length = this.values.length;
  const element = this.values[0];
  while(true){
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;

    if(leftChildIdx < length){
      leftChild = this.values[leftChildIdx];
      if(leftChild > element) swap = leftChildIdx;
    }

    if(rightChildIdx < length){
      rightChild = this.values[rightChildIdx];
      if(
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
      ){
        swap = rightChildIdx;
      }
    }

    if(swap === null) break;
    this.values[idx] = this.values[swap];
    this.values[swap] = element;
    idx = swap;
  }
}
```
<br>

---

<br>

## Priority Queue Intro

→ 각 데이터에 **우선순위(priority)** 가 존재  
→ 일반 큐는 FIFO지만, 우선순위 큐는 우선순위가 높은 데이터가 먼저 처리

예제 코드

```js
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

let ER = new PriorityQueue();
ER.enqueue("common cold",5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever",4)
ER.enqueue("broken arm",2)
ER.enqueue("glass in foot",3)

console.log(ER.dequeue()); // gunshot wound
console.log(ER.dequeue()); // broken arm
console.log(ER.dequeue()); // glass in foot
```
<br>

---

<br>

###  big O

| 구조              |  시간 복잡도                              |
| --------------- |  ----------------------------------- |
| Max Binary Heap | Insert: O(log N), Extract: O(log N) |
| Min Binary Heap |  Insert: O(log N), Extract: O(log N) |
| Priority Queue  |  Enqueue / Dequeue: O(log N)         |


### 핵심 요약

* 힙은 트리 구조지만 배열로 쉽게 관리 가능
* 최댓값/최솟값을 빠르게 접근 가능
* 우선순위 큐, 힙 정렬, 경로 탐색 알고리즘(Dijkstra 등)에 핵심적으로 사용됨
