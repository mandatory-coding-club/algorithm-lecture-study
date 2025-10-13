## 스택과 큐

- 스택
    - 후입선출을 따르는 데이터 모음
    - 가장 마지막에 추가된 요소가 가장 먼저 제거
- 큐
    - 선입선출을 따르는 데이터 모음

## 1. 스택

### 배열로 스택 구현하기

- `push`와 `pop`을 사용하여 구현
- `unshift`와 `shift`를 사용하여 구현
- 중요한 것은 나중에 들어간 데이터가 먼저 나오는 것
- `unshfit` 의 경우, 데이터 추가 시 뒤의 모든 요소들이 인덱스가 새로 부여되므로 비효율적

```jsx
var stack = [];
stack.push("google");
stack.push("youtube");
stack.push("youtube");
stack.pop();

stack = [];
stack.unshift("google");
stack.unshift("youtube");
stack.unshift("youtube");
stack.shift();
stack.shift();
```

### 스택 직접 구현

- 연결 리스트의 개념 활용
- push와 pop에 연결리스트의 unshift와 shift의 개념 사용. 상수의 시간 복잡도가 들게 하기 위해서

```jsx
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor () {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			var temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}
	pop() {
		if (!this.first) return null;
		var temp = this.first;
		if(this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

var stack = new Stack();
stack.push("FIRST");
stack.push("SECOND");
stack.pop();
stack.pop();
```

### 스택의 빅오 복잡도

- 삽입 : O(1)
- 제거 : O(1)
- 검색 : O(n)
- 접근 : O(n)

⇒ 스택에서는 삽입과 제거를 우선시

## 2. 큐 (Queue)

- 선입선출 구조
- 프로그래밍에서 사용되는 경우
    - 백그라운드 작업
    - 자원 업로드
    - 인쇄, 작업 대기열

### 배열로 큐 구현하기

- `push`와 `shift` 사용
- `unshift`와 `pop` 사용
- 스택에서는 `push`와 `pop`을 사용하면 효율적이었지만 큐에서는 `shift`와 `unshift` 때문에 어느 경우라도 비효율성을 피해갈 수 없다.

```jsx
var q = [];
q.push("FIRST");
q.push("SECOND");
q.push("THIRD");
q.shift();
q.shift();

q = [];
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");
q.pop();
q.pop();
```

### 큐 직접 구현하기

- 연결 리스트 개념 활용

```jsx
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		var newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}
	dequeue() {
		if (!this.first) return null;
		
		var temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

var q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");
q.dequeue();
```

### 큐의 빅오 복잡도

- 삽입 : O(1)
- 제거 : O(1)
- 검색 : O(n)
- 접근 : O(n)
