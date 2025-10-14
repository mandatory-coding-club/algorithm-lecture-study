//pop 구현하기
//1번 파일과 동일
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
doublyLinkedList.push(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.prev // null
doublyLinkedList.push(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 5
doublyLinkedList.head.next.val; // 10
doublyLinkedList.tail.val; // 10
doublyLinkedList.head.next.prev.val // 10
doublyLinkedList.push(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 15
doublyLinkedList.tail.prev.val; // 10
doublyLinkedList.head.next.next.val; // 15
 
console.log(doublyLinkedList.pop()?.val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.pop()?.val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.pop()?.val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.pop()); // undefined
console.log(doublyLinkedList.length); // 0