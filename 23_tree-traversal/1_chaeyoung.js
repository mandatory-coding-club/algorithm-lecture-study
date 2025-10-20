class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // 같은 레벨의 노드를 모두 방문 후 자식으로 넘어감
  // 방문해야할 노드의 순서를 다른 배열(queue)로 저장해둠
  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  // 루트 노드를 먼저 방문 후 왼쪽 자식 노드를 방문 후 오른쪽 자식 노드를 방문
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // 왼쪽 자식 노드를 방문 후 오른쪽 자식 노드를 방문 후 루트 노드를 방문
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  // 왼쪽 자식 노드를 방문 후 루트 노드를 방문 후 오른쪽 자식 노드를 방문
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS()); //[ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()); //[ 10, 6, 3, 8, 15, 20 ]
console.log(tree.DFSPostOrder()); //[ 3, 8, 6, 20, 15, 10 ]
console.log(tree.DFSInOrder()); //[ 3, 6, 8, 10, 15, 20 ]
