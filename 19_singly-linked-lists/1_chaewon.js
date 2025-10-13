//연결 리스트 구현하기

//노드 클래스
//연결 리스트 클래스
//push, pop, shift, unshift, get, set, insert, remove, reverse 함수 구현하기

class Node
{
    constructor(val)
    {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //리스트 맨 끝에 원소 추가
    push(val)
    {
        let newNode = new Node(val);
        //빈 리스트일 경우
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        //일반적인 경우
        else
        {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return true;
    }
    //리스트 맨 끝 원소 꺼내기
    pop()
    {
        if(this.length === 0) return undefined;

        //tail의 원소를 꺼내고 기존 -2 원소를 tail로 지정
        let current = this.head;
        let newTail = current;
        while(current.next)
        {
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;
        newTail.next = null;
        this.length--;
        if(this.length === 0)
        {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //head에서 pop
    shift()
    {
        //0번이 return되고 1번이 새 head가 된다
        if(this.length === 0) return undefined;

        let current = this.head;
        this.head = this.head.next;

        this.length--;

        if(this.length === 0) this.tail = null;
        current.next = null;
        return current;
    }
    //head에 추가
    unshift(val)
    {
        //val이 새 헤드가 되고, val.next에 기존 head를 연결한다
        let newNode = new Node(val);
        //리스트가 빈 경우
        if(this.length === 0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        //일반적인 경우
        else
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return true;
    }
    //해당 index에 있는 원소를 반환
    get(index)
    {
        if(index > this.length) return false;
        let count = 0;
        let current = this.head;
        while(count !== index)
        {
            current = current.next;
            count ++;
        }

        return current;
    }
    //해당 index에 있는 val 수정
    set(index, val)
    {
        if(index > this.length) return false;
        let current = this.get(index);
        if(!current) return null;
        current.val = val;
        return true;
    }
    //해당 index에 val 추가
    insert(index, val)
    {
        let newNode = new Node(val);

        if(index > this.length) return false;
        if(index === this.length) return !!this.push(val); //느낌표 두개로 bool로 반환
        if(index === 0) return !!this.unshift(val);

        //index -1의 next로 새 노드 지정, 새 노드의 next로 그 다음 노드
        let preNode = this.get(index - 1);
        let nextNode = preNode.next;
        preNode.next = newNode;
        newNode.next = nextNode;
        this.length++;

        return true;
    }
    //해당 index의 원소 제거
    remove(index)
    {
        //원소 제거하면서 next도 잘...
        if(index >= this.length) return false;
        if(index === 0 ) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();

        let preNode = this.get(index - 1);
        preNode.next = preNode.next.next;

        return true;
    }
    //뒤집기!!
    reverse()
    {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let preNode = null;
        let nextNode = null;
        while(current)
        {
            nextNode = current.next;
            current.next = preNode;
            preNode = current;
            current = nextNode;
        }
        return this;
    }
    //원소 프린트
    print()
    {
        let current = this.head;
        let res = []
        //head부터 next가 없을 때까지
        while(current)
        {
            res.push(current.val);
            current = current.next;
        }
        console.log(res);
    }
}

let list = new SingleLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.push(20);
console.log(list.pop()); //20
console.log(list.shift()); //5
list.unshift(5);
list.print(); //5 10 15
console.log(list.get(2)); //15
list.set(2, 20);
list.print(); //5 10 20
list.insert(2, 15);
list.insert(4, 25);
list.print(); //5 10 15 20 25
list.remove(3);
list.print(); //5 10 15 25
list.reverse();
list.print(); //25 15 10 5