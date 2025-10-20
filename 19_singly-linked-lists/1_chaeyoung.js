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

  //단일리스트의 마지막 노드 추가
  // 1.노드 없는 경우 : head와 tail 모두 새로운 노드를 가리키도록
  // 2.노드 있는 경우 : 기존 마지막 노드(tail)의 next를 새로운 노드를 가리키도록, 테일이 새로운 노드를 가리키도록
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //단일리스트의 마지막 노드 제거
  //마지막 노드를 찾아야함 -> while문 current.next가 null 나올때의 current가 마지막 노드
  //마지막 노드를 찾으면 tail을 마지막 노드로 변경, tail의 next를 null로 변경, length 감소
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //단일리스트의 첫 번째 노드 제거
  //head를 head의 next로 변경, length 감소
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  //단일리스트의 첫 번째 노드 추가
  //head가 없는 경우 : tail이 새로운 노드를 가리키도록
  //head가 있는 경우 : 새로운 노드의 next를 head를 가리키도록, head가 새로운 노드를 가리키도록
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  //단일리스트의 특정 인덱스 노드 가져오기
  //index가 음수 또는 length보다 크거나 같으면 null 반환
  //index가 0이면 head 반환
  // while문 counter가 index가 될때까지 counter 증가하면서 찾기, 찾으면 해당 current 반환
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // 특정 위치 노드 값 변경
  //index가 음수 또는 length보다 크거나 같으면 false 반환
  //get으로 해당 인덱스 노드 찾기, 찾으면 해당 노드의 val을 val로 변경, true 반환
  //찾지 못하면 false 반환
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //특정 위치에 노드 삽입
  //index가 음수 또는 length보다 크거나 같으면 false 반환
  //index===length와 같으면 push
  //index===0이면 unshift
  //get으로 해당 index-1 노드 찾고 해당 노드의 next를 새로운 노드의 next로 변경, 새로운 노드의 next를 해당 노드의 next로 변경, length 증가, true 반환
  //찾지 못하면 false 반환
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //특정 위치에 노드 삭제
  //index가 음수 또는 length보다 크거나 같으면 undefined 반환
  //index===0이면 shift
  //index===length-1이면 pop
  //get으로 해당 index-1 노드 찾고 해당 노드의 next를 해당 노드의 next의 next로 변경, length 감소, 해당 노드 반환
  //찾지 못하면 undefined 반환
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  //역순으로 뒤집기
  // head와 tail을 바꾸고
  // length만큼 반복하면서 노드의 next를 prev로 변경, prev를 node로 변경, node를 next로 변경
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.pop();
console.log(list);
