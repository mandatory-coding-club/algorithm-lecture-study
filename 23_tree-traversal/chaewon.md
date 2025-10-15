#### 너비우선탐색 : queue와 visited 배열을 사용한다~
같은 레벨에 잇는 노드를 다 조사하고 다음 레벨로 넘어가기

#### 깊이우선탐색 : 전위순회/중위순회/후위순회
- 전위 : 루트가 먼저 루트>왼>오
- 중위 : 루트가 중간 왼>루트>오
- 후위 : 루트가 마지막 왼>오>루트

#### 너비와 깊이 뭘 쓰는게 조을까? 트리마다 다르다.
- 트리가 엄청 넓고 깊게 펼쳐져 있을 때, 우리가 큐를 사용한다는 걸 기억하기. 큐에 많은 양의 데이터를 추가하게 되니까 공간 복잡도가 늘어난다.
- 깊이보다 너비가 넓은 트리는 깊이 우선 탐색이 낫다.

깊이우선의 세 방식은 언제 쓰면 좋을까?
- 이진탐색트리에서 중위순회하면 오름차순으로 받을 수 있다.
- 전위순회 : 트리를 복사하거나 다시 만들어낼 때 도움이 된다

```js
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
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
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();
```