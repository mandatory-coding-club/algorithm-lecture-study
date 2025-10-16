// Queue 직접 구현
// Solution
// 선입선출. 연결 리스트 사용하여 구현
// 선입선출을 연결 리스트의 push와 shift로 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if(!this.start) {
      this.start = newNode;
      this.end = this.start;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if(!this.start) return null;
    let poppedNode = this.start;
    if(this.start === this.end) {
      this.start = null;
      this.end = null;
    } else {
      this.start = poppedNode.next;
      poppedNode.next = null;
    }
    this.size--;
    return poppedNode;
  }
}
