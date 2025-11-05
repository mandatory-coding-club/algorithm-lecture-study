// 최대 이진힙 구현
// 1. 삽입 2. 삭제
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  // 삽입
  // 1. 배열 마지막에 삽입
  // 2. 부모 위치의 노드와 비교
  // 3. 부모 노드보다 크면, 둘이 교환 후 idx를 타고 올라가며 반복
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  // 삭제 (ExtractMax)
  // 1. 배열 가장 앞의 노드를 제거
  // 2. 배열의 길이가 0보다 크면, 배열 가장 마지막 원소를 가장 앞에 위치시킴
  // 3. 자식 노드(왼쪽, 오른쪽)와 비교하며 재정렬
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[idx];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild = this.values[leftChildIdx];
      let rightChild = this.values[rightChildIdx];
      let swap = null;

      if (leftChildIdx < length) {
        if(leftChild > element) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        if (swap === null && rightChild > element || swap !== null && rightChild > leftChild) swap = rightChildIdx;
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

var heap = new MaxBinaryHeap();
heap.insert(20);
heap.insert(17);
heap.insert(15);
heap.insert(13);
heap.insert(11);
heap.insert(18);
heap.extractMax();
heap
