## 단일 연결 리스트

- 배열처럼 순서에 따라 다수의 데이터를 저장하는 자료 구조
- 배열과의 차이점
    - 배열은 데이터가 저장될 때마다, 인덱스를 부여하는 방식
    - 연결 리스트는 인덱스 없이, 다음 노드를 가리키는 포인터를 가지고 연결
- 구성 요소
    - 노드 : 연결 리스트를 구성하는 요소
        - 데이터 요소를 저장
        - 다음 노드를 가리키는 정보를 가지고 있음
        - 다음 노드가 없을 때는 `null` 저장
    - 헤드 : 연결 리스트의 시작 노드
    - 테일 : 연결 리스트의 마지막 노드
    - 길이 : 헤드와 테일 계산을 쉽게 하기 위해 알아야 하는 속성
- 임의 접근이 필요하지 않고, 삽입과 제거가 쉬운 긴 데이터 리스트를 구현할 때 사용

```jsx
/* Node */
// piece of data - val
// reference to next node - next
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("are");
```

### `push`

- 리스트의 마지막에 새 노드 추가하기
- 동작 방식
    1. 함수에 전달된 값을 사용해 새로운 Node를 생성
    2. 리스트에 head가 없으면, 헤드와 테일 모두 새로 생성된 노드를 가리키도록 함
    3. 그 외의 경우는 마지막 노드의 `next` 포인터가 새롭게 생성된 노드를 가리키도록 하고, 테일이 새롭게 생성된 노드를 가리키도록 함

### `pop`

- 리스트의 마지막에서 노드를 제거하기
- 테일이 새로운 마지막 노드를 가리키도록 해야 하는데, 역방향 포인터를 가지고 있지 않기 때문에 리스트의 처음부터 따라가야 한다.
- 동작 방식
    1. 마지막 노드를 추출
    2. 리스트에 아무것도 없을 경우 `undefined` 반환
    3. 그 외에는, 리스트의 처음부터 시작해 테일 바로 전 노드를 찾아감
    4. 찾아가는 동안 그 전 노드를 저장하는 변수(`prev`)를 사용
    5. 테일이 마지막에서 두 번째 노드를 가리키게 하고 그 노드의 next를 `null`로 설정
    6. 리스트의 길이를 감소시키고, 추출한 마지막 노드를 반환

### `shift`

- 리스트의 맨 앞에서 노드를 제거
- 동작 방식
    1. 현재 헤드가 가리키고 있는 노드를 제거한 후 변수에 저장
    2. 헤드가 가리키고 있던 리스트의 두 번째 노드를 가리키도록 함
    3. 리스트의 길이를 감소시키고, 제거한 노드를 반환

### `unshift`

- 리스트의 맨 앞에 노드를 추가
- 동작 방식
    1. 새로운 노드 생성
    2. 헤드가 없을 경우, 헤드와 테일 모드 새 노드를 가리키게 함
    3. 이미 있을 경우, 새로운 노드의 next가 원래의 헤드를 가리키게 함
    4. 헤드가 새로운 노드를 가리키게 함
    5. 리스트 길이를 1 증가시키고, 리스트를 반환

### `get`

- 인덱스를 인자로 받아 해당 위치의 노드를 반환
- 주어진 숫자만큼 리스트를 따라가는 방식
- 동작 방식
    1. 엣지 케이스가 있을 수 있음
        1. 인덱스가 음수
        2. 인덱스가 리스트의 길이보다 같거나 클 경우
    2. 루프를 통해 인덱스가 지정하는 위치에 이를 때까지 반복해서 이동
    3. 해당 인덱스 위치에 있는 노드를 반환

### `set`

- 인덱스와 해당 인덱스에 위치한 노드를 업데이트할 새로운 값을 인자로 받아 업데이트
- 동작 방식
    1. 앞서 정의한 `get` 함수로 해당 인덱스의 노드를 찾아 반환
    2. 노드가 없을 경우, false 반환
    3. 있을 경우 해당 노드 값을 새로운 값으로 업데이트하고 true 반환

### `insert`

- 인덱스와 값을 인자로 받아 해당 위치에 새로운 노드를 삽입
- `set`과 다른 점은 해당 인덱스의 노드를 수정하는 것이 아니라, 해당 인덱스에 새로운 노드를 삽입하고 원래 있던 노드에 next 포인터를 연결
- 동작 방식
    1. 인덱스가 음수이거나 리스트의 길이보다 클 경우, `false` 리턴
    2. 인덱스가 길이와 같을 땐, 리스트 가장 마지막에 추가되는 케이스로 단순히 `push`를 활용하면 된다.
    3. 인덱스가 0일 경우, `unshift` 활용
    4. `get` 메서드를 활용해, `인덱스 - 1` 위치의 노드에 접근
    5. 해당 노드의 next에 새로운 노드를 연결
    6. 새로운 노드의 next에 기존의 next 노드를 연결
    7. 길이를 1만큼 증가시키고 `true` 리턴

### `remove`

- 인덱스를 인자로 받아 해당 인덱스에 있는 노드를 제거하고 주위에 있는 것들을 연결
- 제거하려는 노드의 이전 노드를 찾아 그 노드의 next 포인터를 제거되는 노드의 다음 노드에 연결
- 동작 방식
    1. 인덱스의 값이 0보다 작거나 리스트 길이와 같거나 길면 `undefined` 반환
    2. 인덱스가 (길이 - 1)과 같을 경우, `pop` 메서드 활용
    3. 인덱스가 0이면 `shift` 활용
    4. `get` 메서드 활용해 `인덱스 - 1` 위치의 노드에 접근
    5. 이전 노드의 next에 `.next.next`를 연결
    6. 리스트 길이를 1만큼 감소시키고, 제거된 노드를 반환

### `reverse`

- 주어진 연결 리스트의 노드 순서가 역으로 연결되도록 함
- 리스트를 따라가면서 순서를 역으로 해나가야 한다
- 동작 방식
    1. head와 tail을 서로 교환
    2. 다음 노드를 저장할 next 변수와 이전 노드를 저장할 prev 변수를 선언
    3. 현재 노드를 저장할 node 변수를 선언하고 head로 초기화
    4. 리스트를 순회하면서 각 노드의 next 포인터를 이전 노드로 변경
        1. 현재 노드의 next를 임시 변수(next)에 저장
        2. 현재 노드의 next를 prev로 변경 (방향 역전)
        3. prev를 현재 노드로 업데이트
        4. node를 다음 노드(next)로 이동
    5. 순회가 끝나면 역방향으로 바뀐 리스트를 반환

```jsx
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode; // 기존 마지막 노드의 next를 새로운 노드를 가리키도록 함
			this.tail = newNode;  // 테일이 새 노드를 가리키도록
		}
		this.length++;
		return this;
	}
	pop() {
		if(!this.head) return undefined;
		var current = this.head;
		var prev = current;
		while(current.next) {
			prev = current;
			current = current.next;
		}
		this.tail = prev;
		this.tail.next = null;
		this.length--;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (!this.head) return undefined;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if(this.length === 0) {
			this.tail = null;
		}
		return currentHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		var counter = 0;
		var current = this.head;
		while(counter !== index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(index, val) {
		var foundNode = this.get(index);
		if(foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return !!this.push(val);
		if (index === 0) return !!this.unshift(val);
		
		var newNode = new Node(val);
		var prev = this.get(index - 1);
		var temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		
		var prev = this.get(index - 1);
		var removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}
	reverse() {
		var node = this.head;
		this.head = this.tail;
		this.tail = node;
		var next;
		var prev = null;
		
		for(var i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.pop();
list.shift();
list.unshift("FIRST");
```

## 단일 연결 리스트의 빅오 복잡도

- 삽입 : O(1)
- 제거 : O(1) 또는 O(n)
- 검색 : O(n)
- 접근 : O(n)
