// 이중연결리스트
// push, pop, shift, unshift, get, set, insert, remove

class Node {
  constructor(val) {
    this.val = val;
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

  // 맨 뒤에 노드 추가
  // 앞과 뒤 둘다 연결해야함
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // 맨 뒤에 노드 제거 후 반환
  // !this.head -> undefined
  // this.length === 1 -> head, tail null 처리
  // this.length >1 일때
  // 1.제거할 노드의 prev 값이 tail이 되어야함
  // 2.바뀐 tail의 next 끊어주기
  // 3.제거할 노드의 prev 끊어주기
  pop() {
    if (!this.head) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  //맨 앞의 노드 제거 후 반환
  // length===1 -> head, tail null
  shift() {
    if (!this.head) undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  //맨 앞에 노드 추가
  //없을때는 head, tail 부여해줘야함
  //있을때는 기존 head의 prev, 새로 추가된 노드의 next, 해드에 새로운 노드 부여
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  //해당 index의 노드 반환
  // length/2를 기준으로 앞 뒤로 찾기!
  // index 0보다 크고 노드 길이-1보다 작아야함
  // count 증가 및 감소하면서 index와 같아질때까지 while문 반복
  get(index) {
    if (index >= this.length || !this.head || index < 0) return undefined;

    let current, count;

    if (index <= this.length / 2) {
      count = 0;
      current = this.head;

      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length;
      current = this.tail;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  // get으로 해당 index 노드 찾기
  // 해당 노드의 val 변경
  // 성공시 true / 없음 false
  set(index, val) {
    const setNode = get(index);

    if (!setNode) {
      setNode.val = val;
      return true;
    }

    return false;
  }

  // 0 1 2 3 4
  // 2에 넣고 싶다 -> prev 는 get(1), next는 get(2)
  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    const newNode = new Node(val);

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    return this;
  }

  //해당 index 노드 제거
  // 0 1 2 3 4
  // 2 지우고 싶다 get(1)과 get(3) prev, next 연결 /  get(2) next, prev 끊기
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }

  // 확인용
  //   toArray() {
  //     const arr = [];
  //     let current = this.head;
  //     while (current) {
  //       arr.push(current.val);
  //       current = current.next;
  //     }
  //     return arr;
  //   }
}

// const doublyLinkedList = new DoublyLinkedList();
// doublyLinkedList.push(1);
// doublyLinkedList.push(2);
// doublyLinkedList.push(3);
// doublyLinkedList.insert(2, 5);
// console.log(doublyLinkedList.toArray());
