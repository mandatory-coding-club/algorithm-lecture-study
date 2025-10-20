// 이진 검색 트리 insert와 find 메소드 구현
// Solution
// 1. 값, 왼쪽, 오른쪽 속성을 가지는 Node 클래스 구현
// 2. root 속성을 가지는 BinarySearchTree 클래스 구현
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
  // - Insert
  // 1. root가 존재하지 않으면 새로운 노드가 root
  // 2. 그 외의 경우, root와 새로운 노드의 값을 비교
  // 3. 작으면 왼쪽, 크면 오른쪽 노드와 비교하며 이동
  // 4. 비교할 노드가 없으면 그 자리가 새로운 노드의 자리
  insert (value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(value === current.value) return undefined;
        if(value < current.value) {
          if(!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if(!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  // - find
  // 1. root가 존재하지 않으면 false 리턴
  // 2. 그 외, root부터 시작해 해당 노드의 값보다 작으면 왼쪽으로, 크면 오른쪽으로 이동
  // 3. 일치하는 값을 찾으면 true 반환
  find (value) {
    if(!this.root) return false;
    let current = this.root;
    let found = false;
    while(current) {
      if (current.value === value) return true;
      else if (current.value < value) current = current.right;
      else current = current.left;
    }
    return found;
  }
}
