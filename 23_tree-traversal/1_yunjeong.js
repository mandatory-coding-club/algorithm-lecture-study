// 이진탐색트리의 BFS, DFS 구현
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if(!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  // - BFS 너비 우선 탐색
  // 1. queue와 visited 배열 선언
  // 2. root 부터 시작해 자식 노드를 차례로 queue에 넣고, 해당 노드 방문 처리(visited에 넣기)
  // 3. queue의 노드를 차례로 꺼내며 반복
  BFS () {
    if (!this.root) return undefined;
    let queue = [];
    let data = [];
    
    queue.push(this.root);
    let current;
    while(queue.length) {
      current = queue.shift();
      data.push(current.value);
      
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }

    return data;
  }
  // - DFS 깊이 우선 탐색
  // 1) Preorder 전위 순회
  // 1. root 부터 시작해 노드 방문 -> 왼쪽 전체 -> 오른쪽 전체
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    
    traverse(this.root);
    return data;
  }
  // 2) InOrder 중위 순회
  // 1. 왼쪽 전체 방문 -> 노드 방문 -> 오른쪽 전체
  DFSInOrder() {
    let data = [];
    
    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    
    traverse(this.root);
    return data;
  }
  // 3) PostOrder 후위 순회
  // 1. 왼쪽 전체 방문 -> 오른쪽 전체 방문 -> 노드 방문
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    
    traverse(this.root);
    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS()); //[ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSPreOrder()); //[ 10 6 3 8 15 20 ]
console.log(tree.DFSInOrder()); //[ 3 6 8 10 15 20 ]
console.log(tree.DFSPostOrder()); //[ 3 8 6 20 15 10 ]
