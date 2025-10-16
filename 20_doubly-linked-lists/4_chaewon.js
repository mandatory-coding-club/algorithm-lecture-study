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
    set(index, val)
    {
        let targetNode = this.get(index);

        if(!targetNode) return false;

        targetNode.val = val;
        return true;
    }
}

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.set(0,10)); // true
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 10

console.log(doublyLinkedList.set(10,10)); // false

console.log(doublyLinkedList.set(2,100)); // true
console.log(doublyLinkedList.head.next.next.val); // 100
