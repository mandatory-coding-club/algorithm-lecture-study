# 트리 순회 (Tree Traversal)

트리를 탐색하는 방식에는 크게  
- 너비(가로방향)으로 탐색하는 **BFS**와  
- 한쪽 끝까지 깊게(세로방향)으로 탐색하는 **DFS**가 있음


### Breadth-First Search (너비 우선 탐색)

같은 레벨(가로방향)의 노드를 차례로 탐색  

```js
BFS(){
    var node = this.root,
        data = [],
        queue = [];
    queue.push(node);

    while(queue.length){
        node = queue.shift();
        data.push(node.value);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
}
```
<br>

### Depth-First Search (깊이 우선 탐색)

DFS는 전위순회, 후위순회, 중위순회 세가지 종류 있음  

1. PreOrder (전위 순회)  

```js
DFSPreOrder(){
    var data = [];
    function traverse(node){
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}
```


2. PostOrder (후위 순회)

```js
DFSPostOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data;
}
```


3. InOrder (중위 순회)  

```js
DFSInOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}
```
<br> 

### 정리
트리 구조가 다음과 같을때

```
        10
       /  \
      6    15
     / \     \
    3   8     20
```

| 탐색 방식             | 순회 순서         | 결과 예시                 | 특징         |
| ----------------- | ------------- | --------------------- | ---------- |
| **BFS**           | 레벨 순서         | [10, 6, 15, 3, 8, 20] | 같은 깊이 먼저   |
| **DFS PreOrder**  | 루트 → 왼쪽 → 오른쪽 | [10, 6, 3, 8, 15, 20] | 구조 복사 시 유용 |
| **DFS PostOrder** | 왼쪽 → 오른쪽 → 루트 | [3, 8, 6, 20, 15, 10] | 삭제 시 유용    |
| **DFS InOrder**   | 왼쪽 → 루트 → 오른쪽 | [3, 6, 8, 10, 15, 20] | 정렬된 결과 반환  |
