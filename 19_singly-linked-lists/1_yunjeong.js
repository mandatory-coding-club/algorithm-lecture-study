// 단일 연결 리스트 구현
// 1. 값을 저장하고, 다음 노드를 가리키는 next 속성을 가진 Node 클래스 작성
// 2. head, tail, length 속성을 가진 SinglyLinkedList 클래스 작성
// - push
// - pop
// - shift
// - unshift
// - get
// - set
// - insert
// - remove
// - reverse
class Node {
  constructor (val) {
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
  
  // push
  // 1. 새로운 노드 생성
  // 2-1. head가 null이면 head, tail 모두 새 노드로
  // 2-2. 현재 tail의 next를 새 노드로
  // 3. tail을 새 노드로
  // 4. 길이 1만큼 증가
  // 5. 리스트 반환
  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  
  // pop
  // 1. 길이가 0이면 undefined 반환
  // 2. 마지막에서 두 번째 노드를 저장할 변수 prev 정의
  // 3. head부터 시작해서 current.next 가 null 일 때까지 리스트 순회
  // 4. prev에 저장된 노드를 새로운 tail로, 새로운 tail.next를 null로
  // 5. 길이 1 감소
  // 6. 감소된 길이가 0이면 head도 tail도 null
  // 7. 제거된 노드 current 반환
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    // 처음에 while 조건문을 while(current) 로 둬서 무한 순회 오류
    while(current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = null;
    return current;
  }
  
  // shift
  // 1. head가 없으면 undefined 반환
  // 2. 현재의 head를 임시 변수에 저장
  // 3. head.next 를 새로운 head로
  // 2. 길이 1 감소
  // 3. 감소된 길이 0이면 head도 tail도 null
  // 4. 제거된 노드 반환
  shift() {
    if (!this.head) return undefined;
    let removed = this.head;
    this.head = removed.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return removed;
  }

  // unshift
  // 1. 새로운 노드 생성
  // 2-1. head가 없으면 head도 tail도 새 노드
  // 2-2. 새 노드의 next를 현재의 head로
  // 3. 새 head를 새 노드로 지정
  // 4. 길이 1 증가
  // 5. 리스트 반환
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
    return this;
  }

  // get
  // head 없으면 undefined 반환
  // index가 0보다 작거나 리스트 길이보다 같거나 크면 null 반환
  // head부터 시작해서 count가 index에 해당하는 노드 반환
  get(index) {
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let count = 0;
    while(count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // set
  // get 이용해 index에 해당하는 노드 가져오기
  // 가져온 값이 null이 아니라면 true 반환
  set(index, val) {
    if (index < 0 || index >= this.length) return undefined;
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // insert
  // get 이용해 (index - 1)에 해당하는 노드 가져와 prev 변수에 저장
  // index 0이면 unshift, length면 push
  // 새로운 노드 생성 
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let prev = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
    return true;
  }

  // reverse
  // 1. head와 tail 교환
  // 2. head부터 시작해 리스트 길이만큼 순회하면서 방향 역전
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
