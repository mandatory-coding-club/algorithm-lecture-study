//이진검색트리의 insert, find 구현하기

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
    find(val)
    {
        if(!this.root) return undefined;

        let current = this.root;
        while(true)
        {
            if(current.val === val) return current;
            //val이 작으면 왼쪽으로
            if(val < current.val)
            {
                if(current.left === null) return undefined;
                current = current.left;
            }
            //크면 오른쪽으로
            else
            {
                if(current.right === null) return undefined;
                current = current.right;
            }
        }
    }
}

var tree = new BinarySearchTree();

console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
console.log(tree.find(7));
console.log(tree.find(55)); // undefined