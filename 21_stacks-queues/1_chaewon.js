//스택 연결 리스트로 구현하기
class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

class Stack
{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.length++;
        return this;
    }
    pop()
    {
        let res = this.first;
        if(!this.first) return undefined;
        if(this.length === 1)
        {
            this.first = null;
            this.last = null;
        }
        else
        {
            this.first = res.next;
        }

        res.next = null;
        this.length --;
        return res;
    }
}

var stack = new Stack();
console.log(stack.push("FIRST"));
console.log(stack.push("SECOND"));
console.log(stack.pop());
console.log(stack.pop());