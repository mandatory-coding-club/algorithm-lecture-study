//reverse로 하고 this를 반환한다.

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
    reverse()
    {
        if(this.length <= 1) return this;
        
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let preNode = null;
        let nextNode = null;
        while(current)
        {
            nextNode = current.next;

            current.next = preNode;
            current.prev = nextNode;

            preNode = current;
            current = nextNode;
        }
        return this;
    }
}

let doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.push(5).push(10).push(15).push(20)
console.log(doublyLinkedList.reverse()); // singlyLinkedList;
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5