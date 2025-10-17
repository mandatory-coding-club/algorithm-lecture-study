## Tree
트리는 계층적인 데이터 구조(hierarchical data structure)로,
**노드(Node)** 들이 **간선(Edge)** 으로 연결되어 있다.

* 하나의 **루트(root)** 노드에서 시작된다.
* 각 노드는 **자식 노드(children)** 를 가질 수 있다.
* 트리는 **사이클(cycle)** 이 없는 구조다.
  즉, 한 노드에서 시작해 다시 자기 자신으로 돌아올 수 없다.

## 이진 탐색 트리 (Binary Search Tree)
BST는 각 노드가 최대 두 개의 자식 노드를 가짐  
왼쪽은 **작은 값**, 오른쪽은 **큰 값**이 위치하도록 구성된 트리 구조

- Node 클래스

```js
class Node {
    constructor(value){
        this.value = value; 
        this.left = null; 
        this.right = null;
    }
}
```

- BinarySearchTree 클래스
```js
class BinarySearchTree {
    constructor(){
        this.root = null; // 트리 가장 상단에 있는 노드
    }

  // 값 삽입
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value === current.value) return undefined; // 중복 방지
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // 값 탐색
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    // 값 존재 여부 확인
    contains(value) {
        if (this.root === null) return false;
        var current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}
}

//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.contains(7));  // true
console.log(tree.find(13));     // Node { value: 13, left: Node(11), right: Node(16) }
console.log(tree.find(100));    // undefined
```

### BST의 장점

* 데이터를 정렬된 형태로 유지
* 검색, 삽입, 삭제가 평균적으로 **O(log N)** 의 시간 복잡도  
  but 트리가 한쪽으로 기울어진 경우엔 O(N)까지 나빠질 수 있음


### 정리 요약

| 메서드               | 설명         | 시간 복잡도        |
| ----------------- | ---------- | ------------- |
| `insert(value)`   | 새로운 노드 삽입  | O(log N) (평균) |
| `find(value)`     | 노드 탐색      | O(log N) (평균) |
| `contains(value)` | 특정 값 존재 여부 | O(log N) (평균) |

균형 잡힌 트리일수록 탐색 효율이 좋음
즉 한쪽으로 치우친 트리(skewed tree)가 되면 사실상 연결 리스트처럼 동작함
