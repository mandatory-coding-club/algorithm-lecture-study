//너비 우선, 깊이 우선 탐색

class Node
{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }
    insert(val)
    {
        let newNode = new Node(val);
        if(!this.root)
        {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true)
        {
            if(current.val === val) return undefined;
            //val이 작으면 왼쪽으로
            if(val < current.val)
            {
                if(current.left === null)
                {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            //크면 오른쪽으로
            else
            {
                if(current.right === null)
                {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    BFS()
    {
        let queue = [];
        let visited = [];
        let node = this.root;

        queue.push(node);
        while(queue.length)
        {
            node = queue.shift();
            visited.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return visited;
    }
    DFSpre() //node>left>right
    {
        let data = [];

        function traverse(node)
        {
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }
    DFSin() //left->node->right
    {
        let data = [];

        function traverse(node)
        {
            if(node.left) traverse(node.left);
            data.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);

        return data;
    }
    DFSpost() //left->right->node
    {
        let data = [];

        function traverse(node)
        {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);

        return data;
    }
}

//      10
//    6    15
//  3  8  x   20
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS()); //[ 10, 6, 15, 3, 8, 20 ]
console.log(tree.DFSpre()); //[ 10 6 3 8 15 20 ]
console.log(tree.DFSin()); //[ 3 6 8 10 15 20 ]
console.log(tree.DFSpost()); //[ 3 8 6 20 15 10 ]