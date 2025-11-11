// SinglyLinkedList
// push 연습
// SinglyLinkedList의 끝에 노드를 추가. SinglyLinkedList 반환.
// Solution
// 1. Node 클래스 작성 - val, next 속성
// 2. SinglyLinkedList(head, tail, length 속성)의 push 작성
//  - 1. 새로운 노드 생성
//  - 2. head가 존재하지 않으면 (length가 0) head와 tail 둘 다 새 노드로 설정
//  - 3. head가 존재하면 기존 tail의 next와 새로운 tail이 새로운 노드를 가리키도록
//  - 4. length를 1만큼 증가
//  - 5. singlyLinkedList 반환
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.length; // 1
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 5
 
singlyLinkedList.push(10); // singlyLinkedList
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.tail.val; // 10
 
singlyLinkedList.push(15); // singlyLinkedList
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.tail.val; // 15
