// DLL push 구현
// Solution
// 1. 새로운 노드 생성
// 2. 기존 리스트가 비어 있으면 head와 tail 모두 newNode
// 3. 기존 tail을 임시 변수에 저장
// 4. 임시 변수의 next를 newNode로
// 5. newNode의 prev를 임시 변수에 저장된 노드로
// 6. 새로운 tail을 newNode로
// 7. 리스트의 길이 1만큼 증가
// 8. 리스트 반환
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      let temp = this.tail;
      temp.next = newNode;
      newNode.prev = temp;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
}
