// DLL insert / remove 구현
// Solution
// 1. 인덱스 유효성 검사
// 2. 인덱스 0일 경우, unshift 활용
// 3. 인덱스 this.length일 경우, push 활용
// 4. 그 외, 새로운 노드 생성
// 5. 해당 인덱스에 있는 기존 노드 가져오기
// 6. 기존 노드의 prev를 새로운 노드의 prev로 연결
// 7. 기존 노드를 새로운 노드의 prev로, 새로운 노드의 next를 기존 노드로
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
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current, count;
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while(index !== count) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while(index !== count) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let nextNode = this.get(index);
    let prevNode = nextNode.prev;

    newNode.prev = prevNode;
    prevNode.next = newNode;
    
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;

    return true;
  }
  remove(index) {
    let removedNode = this.get(index);
    if (!removedNode) return undefined;
    
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;

    if (prevNode) {
      prevNode.next = nextNode;
    } else {
      this.head = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
    } else {
      this.tail = prevNode;
    }
    removedNode.prev = null, removedNode.next = null;
   
    this.length--;

    return removedNode;
  }
}
