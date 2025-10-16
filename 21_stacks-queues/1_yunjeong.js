// Stack 구현
// Solution 
// 후입선출. 단일 연결리스트 이용하여 구현
// 1. Node 클래스 생성
// 2. 단일 연결리스트 형식으로 Stack 클래스 생성
// 3. 후입선출은 단일 연결리스트의 unshift, shift 구현 형식 활용 (상수의 시간복잡도를 위해)
class Node {
 constructor (value) {
   this.value = value;
   this.next = null;
 } 
}

class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.start = newNode;
      this.end = this.start;
    } else {
      newNode.next = this.start;
      this.start = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let poppedNode = this.start;
    this.start = poppedNode.next;
    poppedNode.next = null;

    this.size--;
    if (this.size === 0) this.end = null;

    return poppedNode;
  }
}
