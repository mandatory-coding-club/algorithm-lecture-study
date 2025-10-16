// DLL shift 구현
// Solution
// 1. 기존 head를 임시 변수에 저장
// 2. 기존 head의 next 노드를 새로운 head로
// 3-1. 새로운 head가 null 이면 새로운 tail도 null (길이가 1이었음)
// 3-2. 새로운 head가 null이 아니면
//   - 기존 head의 next를 null로
//   - 새로운 head의 prev를 null로
// 6. 리스트 길이를 1만큼 감소
// 7. 제거된 노드(임시 변수) 반환
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
  shift() {
    if (!this.head) return undefined;
    let removedNode = this.head;
    this.head = removedNode.next;
    if(!this.head) {
      this.tail = null;
    } else {
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    
    return removedNode;
  }
}
