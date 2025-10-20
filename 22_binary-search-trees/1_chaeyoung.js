// 이진 탐색 트리
// insert, find, contains

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 루트(currentNode가) 값과 새로운 값 비교
  //    1. currentNode가 없는 경우 : 새로운 값이 currentNode가가 됨
  //    2. currentNode보다 작은 경우 : currentNode.left과 비교
  //                        - currentNode.left === null : 새로운 값이 currentNode.left 값이 됨
  //                        - currentNode.left 있는 경우 : 비교할 대상(currentNode)가 currentNode.left 됨!!(2번 반복)
  //       currentNode보다 큰 경우 : currentNode.right와 비교
  //                        - currentNode.right === null : 새로운 값이 currentNode.right 값이 됨
  //                        - currentNode.right 있는 경우 : 비교할 대상(currentNode)가 currentNode.right 됨!!(2번 반복)
  //    2번 while 문 멈추는 조건 -> currentNode === 새로운 값이 되면 멈춰야함

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (value !== currentNode.value) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  //삽입과 똑같이 while문으로 현재노드와 찾을때 까지 값 비교
  //비교할 값과 작지도 크지도 않다 = 같다! 해당 노드 리턴해줌
  //while문 다 돌았는데도 안끝남 = 없다! flase 리턴해줌
  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return currentNode;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  //find와 로직 동일. 리턴값만 boolean으로
  contains(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(13);
binarySearchTree.insert(11);
binarySearchTree.insert(2);
binarySearchTree.insert(16);
binarySearchTree.insert(7);

console.log(binarySearchTree.find(13)); //Node { value: 13, left: Node(11), right: Node(16) }
console.log(binarySearchTree.find(8)); //false
console.log(binarySearchTree.contains(11)); //true
console.log(binarySearchTree.contains(8)); //false
