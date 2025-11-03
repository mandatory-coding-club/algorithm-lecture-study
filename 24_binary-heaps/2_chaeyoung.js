//PriorityQueue

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  //끝 요소와 부모 크기 비교
  //숫자 클수록 우선순위 높은걸로 했습니다요
  bubbleUp() {
    let currentIdx = this.values.length - 1;
    const current = this.values[currentIdx];
    while (currentIdx > 0) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority > current.priority) break;
      [this.values[parentIdx], this.values[currentIdx]] = [
        this.values[currentIdx],
        this.values[parentIdx],
      ];
      currentIdx = parentIdx;
    }
  }

  // 우선순위 최고 높은 요소 추출
  dequeue() {
    let first = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return first;
  }

  // 추출 후 마지막 요소를 루트로 옮기고 왼,오 자식들과 비교하며 위치 이동
  // 바꿀 위치를 swap에 저장하고 바꿔줌 (없으면 break)
  sinkDown() {
    let idx = 0;
    const current = this.values[idx];

    while (true) {
      let rightIdx = idx * 2 + 1;
      let leftIdx = idx * 2 + 2;
      let right = this.values[rightIdx];
      let left = this.values[leftIdx];
      let swap = null;

      if (rightIdx < this.values.length && current.priority < right.priority)
        swap = rightIdx;

      if (
        leftIdx < this.values.length &&
        ((swap === null && current.priority < left.priority) ||
          (swap !== null && right.priority < left.priority))
      )
        swap = leftIdx;

      if (swap === null) break;
      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.log(ER); //5,3,4,1,2

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER); //3,1,2
