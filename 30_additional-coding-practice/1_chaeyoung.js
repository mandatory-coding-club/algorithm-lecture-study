class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // 1. SLL(SinglyLinkedList) - push 연습
  // 이 함수는 값을 받아 SinglyLinkedList의 끝에 노드를 추가해야 합니다. 이 함수는 SinglyLinkedList를 반환해야 합니다.

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  //   2. SLL (SinglyLinkedList)- pop 연습
  // 이 함수는 SinglyLinkedList의 끝에서 노드를 제거해야 합니다. 제거된 노드를 반환해야 합니다.
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // newTail과 제거할노드 찾기
      while (current.next) {
        newTail = current;
        current = newTail.next;
      }
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;

    return current;
  }

  //   3. SLL (SinglyLinkedList) - get 연습
  // 이 함수는 SinglyLinkedList의 지정된 인덱스에서 노드를 찾아야 합니다. 찾은 노드를 반환해야 합니다.

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  //   4. SLL (SinglyLinkedList) - insert 연습
  // 이 함수는 SinglyLinkedList의 지정된 인덱스에 노드를 삽입해야 합니다. 인덱스가 유효하면 true를 반환하고 인덱스가 유효하지 않은 경우(0보다 작거나 목록 길이보다 큰 경우) false를 반환해야 합니다.

  // 1. 첫번째 삽입 : head 지정
  // 2. 마지막 삽입 : push 메서드와 동일
  // 3. 나머지 중간 삽입 : get으로 삽입해야할 index의 이전 노드를 찾은 후 이전, 이후 연결

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const prev = this.get(index - 1);
      if (!prev) return false;
      newNode.next = prev.next;
      prev.next = newNode;
    }
    this.length++;
    return true;
  }

  //   5. SLL(SinglyLinkedList) - rotate 연습
  // 이 함수는 리스트의 모든 노드를 전달된 숫자만큼 회전시켜야 합니다. 예를 들어 목록이 1 -> 2 -> 3 -> 4 -> 5인데 2만큼 회전하면 목록은 3 -> 4 -> 5 -> 1 -> 2로 수정되어야 합니다. 회전하기 위해 전달된 숫자는 어떤 정수나 가능합니다.
  // Time Complexity: O(N) (N은 리스트의 길이)
  // Space Complexity: O(1)

  // 연결되어 있기 때문에 head, tail만 변경하면 됨
  // 회전횟수가 리스트 길이보다 클 수 있으므로 나머지 연산 이용 -> 음수인 경우 양수로 변환
  // 새로운 tail이 될 노드 찾기 (rotateNum - 1 인덱스)
  // 새로운 head 찾기 (newTail.next)
  // tail을 head에 연결하여 순환 구조 만들기
  // 새로운 head와 tail 설정
  // tail의 next를 null로 설정
  // 리스트 반환
  rotate(num) {
    if (this.length <= 1) return this;

    let rotateNum = num % this.length;
    if (rotateNum === 0) return this;

    if (rotateNum < 0) {
      rotateNum = this.length + rotateNum;
    }

    const newTail = this.get(rotateNum - 1);
    const newHead = newTail.next;

    this.tail.next = this.head;

    this.head = newHead;
    this.tail = newTail;
    this.tail.next = null;

    return this;
  }

  //  6. SLL(SinglyLinkedList) - set 연습
  // 이 함수는 인덱스와 값을 받아 해당 인덱스에 있는 SinglyLinkedList의 노드 값을 새 값으로 업데이트해야 합니다. 노드가 성공적으로 업데이트되면 true를 반환하고, 유효하지 않은 인덱스가 전달되면 false를 반환해야 합니다.

  // get으로 해당 index 노드 찾아서 val만 업데이트
  set(index, val) {
    if (index < 0 || index >= this.length) return false;
    const foundNode = this.get(index);
    foundNode.val = val;
    return true;
  }

  //   7. SLL (SinglyLinkedList ) - remove 연습
  // 이 함수는 SinglyLinkedList의 지정된 인덱스에서 노드를 제거해야 합니다. 인덱스가 유효하면 제거된 노드를 반환하고, 인덱스가 유효하지 않으면 undefined 를 반환해야 합니다.

  // 1.노드 1개만 있는 경우 -> head, tail 모두 제거
  // 2.노드 2개 이상 -> 이전 노드와 다음 노드 연결 prev.next = current.next / current.next = null 제거할 노드와 다음 노드 연결 끊기
  // 3.마지막 노드인경우 -> pop과 동일
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    let removed;
    if (this.length === 1) {
      removed = this.head;
      this.head = null;
      this.tail = null;
    } else {
      const prev = this.get(index - 1);
      removed = prev.next;
      prev.next = removed.next;
      removed.next = null;
    }
    this.length--;

    return removed;
  }
}

// push 예제
// singlyLinkedList.push(5); // singlyLinkedList
// singlyLinkedList.length; // 1
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val;

// singlyLinkedList.push(10); // singlyLinkedList
// singlyLinkedList.length; // 2
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.tail.val; // 10

// singlyLinkedList.push(15); // singlyLinkedList
// singlyLinkedList.length; // 3
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.head.next.next.val; // 15
// singlyLinkedList.tail.val; // 15

// pop 예제
// singlyLinkedList.pop().val; // 15
// singlyLinkedList.tail.val; // 10
// singlyLinkedList.length; // 2
// singlyLinkedList.pop().val; // 10
// singlyLinkedList.length; // 1
// singlyLinkedList.pop().val; // 5
// singlyLinkedList.length; // 0
// singlyLinkedList.pop(); // undefined
// singlyLinkedList.length; // 0

// var singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(5).push(10).push(15).push(20);

// get 예제
// console.log(singlyLinkedList.get(0).val); // 5
// console.log(singlyLinkedList.get(1).val); // 10
// console.log(singlyLinkedList.get(2).val); // 15
// console.log(singlyLinkedList.get(3).val); // 20
// console.log(singlyLinkedList.get(4)); // null

// insert 예제
// console.log(singlyLinkedList.insert(2, 12)); // true
// console.log(singlyLinkedList.insert(100, 12)); // false
// console.log(singlyLinkedList.length); // 5
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.head.next.val); // 10
// console.log(singlyLinkedList.head.next.next.val); // 12
// console.log(singlyLinkedList.head.next.next.next.val); // 15
// console.log(singlyLinkedList.head.next.next.next.next.val); // 20

// console.log(singlyLinkedList.insert(5, 25)); // true
// console.log(singlyLinkedList.head.next.next.next.next.next.val); //25
// console.log(singlyLinkedList.tail.val); // 25

// rotate 예제
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.rotate(3);
// console.log(singlyLinkedList.head.val); // 20
// console.log(singlyLinkedList.head.next.val); // 25
// console.log(singlyLinkedList.head.next.next.val); // 5
// console.log(singlyLinkedList.head.next.next.next.val); // 10
// console.log(singlyLinkedList.head.next.next.next.next.val); // 15
// console.log(singlyLinkedList.tail.val); // 15
// console.log(singlyLinkedList.tail.next); // null
// singlyLinkedList.rotate(-1);
// console.log(singlyLinkedList.head.val); // 25
// console.log(singlyLinkedList.head.next.val); // 5
// console.log(singlyLinkedList.head.next.next.val); // 10
// console.log(singlyLinkedList.head.next.next.next.val); // 15
// console.log(singlyLinkedList.head.next.next.next.next.val); // 20
// console.log(singlyLinkedList.tail.val); // 20
// console.log(singlyLinkedList.tail.next); // null
singlyLinkedList.rotate(1000);
console.log(singlyLinkedList.head.val); // 5
console.log(singlyLinkedList.head.next.val); // 10
console.log(singlyLinkedList.head.next.next.val); // 15
console.log(singlyLinkedList.head.next.next.next.val); // 20
console.log(singlyLinkedList.head.next.next.next.next.val); // 25
console.log(singlyLinkedList.tail.val); // 25
console.log(singlyLinkedList.tail.next); // null

// set 예제
// console.log(singlyLinkedList.set(0, 10)); // true
// console.log(singlyLinkedList.set(1, 2)); // true
// console.log(singlyLinkedList.length); // 2
// console.log(singlyLinkedList.head.val); // 10

// console.log(singlyLinkedList.set(10, 10)); // false

// console.log(singlyLinkedList.set(3, 100)); // true
// console.log(singlyLinkedList.head.next.next.next.val); // 10

// remove 예제
// console.log(singlyLinkedList.remove(2).val); // 15
// console.log(singlyLinkedList.remove(100)); // undefined
// console.log(singlyLinkedList.length); // 3
// console.log(singlyLinkedList.head.val); // 5
// console.log(singlyLinkedList.head.next.val); // 10
// console.log(singlyLinkedList.head.next.next.val); // 20
