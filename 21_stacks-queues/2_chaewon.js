//큐 연결 리스트로 구현하기
//FIFO

class Node 
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

class Queue 
{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    //push
    enqueue(val)
    {
        let newNode = new Node(val);
        if(!this.first)
        {
            this.first = newNode;
            this.last = newNode;
        }
        else
        {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }
    //shift
    dequeue()
    {
        if(!this.first) return undefined;
        let res = this.first;
        
        if(this.length === 1)
        {
            this.first = null;
            this.last = null;
        }
        else
        {
            this.first = this.first.next;
        }
        res.next = null;
        this.length--;
        return res;
    }
}

var q = new Queue();
console.log(q.enqueue("FIRST")); //Queue
console.log(q.enqueue("SECOND")); //Queue
console.log(q.enqueue("THIRD")); //Queue
console.log(q.dequeue()); //FIRST