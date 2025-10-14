// DLL unshift 구현
// Solution
// 1. 새로운 노드 생성
// 2. 리스트가 비어있으면 head와 tail 모두 newNode
// 3. 기존 head의 prev를 newNode로
// 4. newNode의 next를 기존의 head로
// 5. newNode를 새로운 head로 설정
// 6. 리스트의 길이를 1만큼 증가
// 7. 리스트를 반환
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}
