//시작에 새 원소를 추가하는 unshift 구현. retrun은 this
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
    //시작에 추가하기
    unshift(val)
    {
        let newNode = new Node(val);
        if(this.length === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

var doublyLinkedList = new DoublyLinkedList;
console.log(doublyLinkedList.unshift(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(10)); // doublyLinkedList 
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(15)); // doublyLinkedList
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5