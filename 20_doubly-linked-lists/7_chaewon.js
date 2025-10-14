//get 구현하기
//4번 문항과 동일

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
}

var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.get(0)?.val); // 5
console.log(doublyLinkedList.get(1)?.val); // 10
console.log(doublyLinkedList.get(2)?.val); // 15
console.log(doublyLinkedList.get(3)?.val); // 20
console.log(doublyLinkedList.get(4)); // null