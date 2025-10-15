// stack 구현 like 접시더미

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //맨 위에 쌓는다
  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const prevNode = this.first;
      this.first = newNode;
      this.first.next = prevNode;
    }
    this.length++;

    return this;
  }

  //위(최신)에서부터 꺼내기
  // 1 2 3
  pop() {
    if (!this.first) return undefined;
    let poppedNode = this.first;

    this.first = this.first.next;
    poppedNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.last = null;
    }

    return poppedNode;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack); // 1
