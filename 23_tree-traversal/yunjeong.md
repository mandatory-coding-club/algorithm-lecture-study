## 트리 순회

- 모든 노드를 한 번 씩 모두 방문
- 일반적인 모든 트리에 적용 가능
- 트리를 순회하는 두 가지 방법
    1. 너비 우선 탐색 (Breadth First Search)
        - 트리를 가로로 가로질러 순회하는 방법
    2. 깊이 우선 탐색 (Depth First Search)
        - 트리의 수직 방향으로 순회하는 방법
        - 세 가지 순서가 있음
            1. in order : 중위 순서
                - 왼쪽 자식 → 부모 노드 → 오른쪽 자식 순서로 방문
            2. preorder : 전위 순서
                - 부모 노드 먼저 방문한 후 자식 노드 방문
            3. postorder : 후위 순서
                - 아래부터 내려가서 올라오는 방법

## 1. 너비 우선 탐색

- 자식 노드를 보기 전에, 같은 레벨에 있는 모든 노드를 보는 것
- `큐(Queue)`를 사용해 작업
- `queue`와 `visited` 배열을 사용한다.
- 같은 레벨에 있는 노드를 일종의 대기열 queue 배열에 넣어 놓고, 실제 방문한 노드들은 visited 배열에

```jsx
BFS() {
	var node = this.root,
			data = [],
			queue = [];
	queue.push(node);
	while(queue.length) {
		node = queue.shift();
		data.push(node.value);
		if(node.left) queue.push(node.left);
		if(node.right) queue.push(node.right);
	}
	return data;
}
```

## 2-1. 깊이 우선 탐색  - 전위 순회

- 루트부터 시작해
- 노드 방문 → 왼쪽 전체를 먼저 순회 → 오른쪽 전체 순회
- 재귀로 구현하는 것이 좋음

```jsx
DFSPreOrder() {
	var data = [];
	var current = this.root;
	function traverse(node) {
		data.push(node.value);
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);
	}
	traverse(this.root);
	return data;
}
```

## 2-2. 깊이 우선 탐색 - 후위 순회

- 모든 자식을 먼저 방문한 후, 부모 노드 방문
- 루트 노드는 가장 마지막에 방문하게 됨
- 왼쪽 전체 → 오른쪽 전체 → 루트 노드

```jsx
DFSPostOrder() {
	var data = [];
	function traverse(node) {
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);
		data.push(node.value);
	}
	traverse(this.root);
	return data;
}
```

## 2-3. 깊이 우선 탐색 - 중위 순회

- 왼쪽 전체를 순회한 후 → 부모 노드 방문 → 그 후 오른쪽 전체 순회

```jsx
DFSInOrder() {
	var data = [];
	function traverse(node) {
		node.left && traverse(node.left);
		data.push(node.value);
		node.right && traverse(node.right);
	}
	traverse(this.root);
	return data;
}
```

## 3. 각 탐색 방법의 사용 이유

### 1) 너비 우선 탐색과 깊이 우선 탐색의 비교

- 시간 복잡도는 같다.
- 너비 우선 탐색은 queue에 방문해야 할 노드들을 저장하므로, 너비가 넓은 트리에서는 더 많은 공간 메모리를 차지한다.
- 너비보다 깊이가 깊은 트리에서는 특히, 극단적인 상황(예: 일자 형태)에서는 너비 우선 탐색이 공간 메모리를 거의 사용하지 않기 때문에 너비 우선 탐색이 더 유리

### 2) 깊이 우선 탐색의 세 가지 순서 비교

- 데이터를 순서대로 나열하거나 저장해야 할 때 중위 순회 사용
- 트리를 복사해서 다시 구현해야 할 때 전위 순회를 사용하면 무엇이 루트이고 자식 노드인지 분명하다.
