//앞에서 제거하는 shift 구현하기. return은 제거된 노드.
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
    //앞에서 꺼내기
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
}


var doublyLinkedList = new DoublyLinkedList;
doublyLinkedList.unshift(5); // doublyLinkedList
doublyLinkedList.length; // 1
doublyLinkedList.head.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(10); doublyLinkedList 
doublyLinkedList.length; // 2
doublyLinkedList.head.val; // 10
doublyLinkedList.head.next.val; // 5
doublyLinkedList.tail.val; // 5
doublyLinkedList.unshift(15); doublyLinkedList
doublyLinkedList.length; // 3
doublyLinkedList.head.val; // 15
doublyLinkedList.tail.val; // 5
doublyLinkedList.head.next.next.val; // 5
 
console.log(doublyLinkedList.shift().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.shift().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.shift().val); // 5
console.log(doublyLinkedList.length); // 0
console.log(doublyLinkedList.pop()); // undefined
console.log(doublyLinkedList.length); // 0