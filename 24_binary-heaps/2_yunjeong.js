// 우선순위 큐 구현
// 1. 삽입 2. 삭제
// 이진 힙 구현 재활용해서 구현
// 값, 우선순위를 가지는 노드 클래스 추가
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
class PriorityQueue{
  constructor() {
    this.values = [];
  }
  
  // 삽입
  // 1. 값, 우선순위를 가지는 새로운 노드 생성
  // 2. 배열 맨 마지막 삽입
  // 3. 부모 노드의 `우선순위`와 비교
  // 4. 우선순위가 높으면 (숫자가 낮으면) 교환 후, idx 올라가며 계속
  enqueue(element, priority) {
    let newNode = new Node(element, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if(parent.priority <= element.priority) break;
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }
  // 삭제
  // 1. 배열 맨 처음의 요소 제거
  // 2. 배열 맨 마지막 요소 pop하여 임시 저장
  // 3. 배열 길이가 0 이상이면 pop한 마지막 요소를 배열 맨 처음으로 위치시킴
  // 4. 자식 노드(왼쪽, 오른쪽)와 우선순위를 비교하면서 재정렬
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) swap = rightChildIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
