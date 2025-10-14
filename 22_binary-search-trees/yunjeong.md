## 트리

- 부모 - 자식 관계를 가진 노드들을 가진 데이터 구조
- 하나의 노드는 여러 개의 노드를 가리킬 수 있다.
- 비선형구조의 데이터 구조
- 단일 연결 리스트도 일종의 트리가 될 수 있다.
- 부모 → 자식을 가리키는 구조. 자식 → 부모, 형제 → 형제는 가능하지 않음

### 용어

- Root : 트리의 최상단 노드
- Child : 루트에서 멀어지는 방향으로 다른 노드와 연결된 노드
- Parent : 자식의 반대 개념
- Siblings : 같은 부모 노드를 가진 노드
- Leaf : 자식 노드가 없는 노드
- Edge : 간선. 한 노드에서 다른 노드로 향하는 선

### 실생활 예제

- HTML, DOM
- 네트워크 라우팅
- 파일 디렉토리 구조
- 인공지능
- JSON

### 이진 트리

- 이진 트리
    - 각 노드가 최대 두 개의 자식을 가질 수 있음. 0 ~ 2 개의 자식
- 이진 탐색 트리
    - 이진 트리의 한 종류
    - 부모 노드의 왼쪽은 항상 부모보다 작고, 오른쪽은 항상 부모보다 크다.

### 이진 탐색 트리 구현

1. 삽입
    - 루트부터 비교 시작
    - 노드보다 크면 오른쪽 노드와, 작으면 왼쪽 노드와 비교
    - 비교할 노드가 없다면 그 곳이 삽입할 자리
2. Find
    - 삽입 과정과 유사
    - 루트부터 비교 시작
    - 노드보다 크면 오른쪽 노드와, 작으면 왼쪽 노드와 비교
    - 비교할 노드가 없다면 null 또는 undefined 반환

```jsx
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
		var newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			var current = this.root;
			while(true) {
				if(value === current.value) return undefined;
				if(value < current.value) {
					if(current.left === null) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else if (value > current.value) {
					if(current.right === null) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}
	}
	find(value) {
		if (this.root === null) return false;
		var current = this.root,
				found = false;
		while(current && !found) {
			if(value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if(!found) return undefined;
		return current;
	}
}

var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
```

### 이진탐색트리의 빅오 복잡도

- 삽입 : O(log n)
- 검색 : O(log n)
- 한 쪽으로 쏠린 트리의 경우, O(n)
