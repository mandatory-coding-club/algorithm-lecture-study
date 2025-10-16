// DLL reverse 구현
// Solution
// 1. 기존 tail과 head를 서로 교환
// 2. current 변수에 새로운 head 설정
// 3. crrent.prev가 null이 될 때까지 prev를 이용해 순회하면서 prev와 next의 교환
// 4. 최종 리스트 반환
class Node {
  constructor(val){
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  reverse(){
    if (this.head === null) return undefined;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let current = this.head;
    while(current) {
      let temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      
      current = current.next;
    }

    return this;
  }
}
