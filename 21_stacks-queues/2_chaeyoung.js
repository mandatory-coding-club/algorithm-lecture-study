//queue 구현 like 선입선출

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // 뒤에 쌓음
  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }

    this.last = newNode;
    this.length++;

    return this;
  }

  // 먼저 들어온거(앞에서부터) 빼기
  dequeue() {
    if (!this.first) return undefined;

    const dequeuedNode = this.first;
    this.first = this.first.next;
    dequeuedNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return dequeuedNode;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue); // 2 3
