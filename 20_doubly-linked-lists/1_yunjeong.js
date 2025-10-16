// DLL push 구현
// Solution
// 1. 새로운 노드 생성
// 2. 기존 리스트가 비어 있으면 head와 tail 모두 newNode
// 3. 기존 tail의 next를 newNode로
// 4. newNode의 prev를 기존 tail로
// 5. 새로운 tail을 newNode로
// 6. 리스트의 길이 1만큼 증가
// 7. 리스트 반환
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}
