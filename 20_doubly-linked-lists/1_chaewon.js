//더블 링크드 리스트의 push&pop 구현하기
//push하고는 this를 반환해야 함

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
}



var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.push(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.prev); // null
console.log(doublyLinkedList.push(10)); 
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.tail.val); // 10
console.log(doublyLinkedList.head.next.prev.val); // 10
console.log(doublyLinkedList.push(15));
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 15
console.log(doublyLinkedList.tail.prev.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 15
 
console.log(doublyLinkedList.pop().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.pop().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.pop().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.pop()); // undefined
console.log(doublyLinkedList.length); // 0
