//remove 구현, 제거된 노드 반환
//set 하고 T/F 반환하기기
class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //push
    push(val)
    {
        let newNode = new Node(val);
        if(this.length === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(this.length === 0) return undefined;
        let res = this.tail;
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = res.prev;
            this.tail.next = null;
        }
        res.prev = null;
        
        this.length --;
        return res;
    }
    shift()
    {
        let res = this.head;
        if(this.length === 0) return undefined;
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
            this.length --;
            return res;
        }

        this.head.next.prev = null;
        this.head = this.head.next;
        res.next = null;

        this.length--;
        return res;
    }
    get(index)
    {
        if (index < 0 || index >= this.length) return null;
        let current;
        let count;
        //index값에 따라 앞에서부터/뒤에서부터
        if(index < this.length/2)
        {
            current = this.head;
            count = 0;
            while(count !== index)
            {
                current = current.next;
                count++;
            }
            return current;
        }
        else
        {
            current = this.tail;
            count = this.length - 1;
            while(count !== index)
            {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    remove(index)
    {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let targetNode = this.get(index);
        if(!targetNode) return undefined;
        targetNode.prev.next = targetNode.next;
        targetNode.next.prev = targetNode.prev;
        targetNode.prev = null;
        targetNode.next = null;

        this.length--;

        return targetNode;
    }
}

var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.remove(2)?.val); // 15
console.log(doublyLinkedList.remove(100)); // undefined
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 20