## 이중 연결 리스트

- 단일 연결 리스트와의 차이점
    - 다음 노드를 가리키는 next 외에, 이전 노드를 가리키는 prev 또한 가지고 있다.
    - 따라서, 리스트를 반대로 순회할 경우 더 간단히 구현할 수 있다.
    - 단점은, 메모리가 단일 연결 리스트에 비해 더 많이 든다.

### `push`

1. 새로운 노드 생성
2. 헤드가 null이면 헤드와 테일 모드 새 노드로 설정
3. 그 외에는 현재의 tail의 next를 새 노드로 지정
4. 새 노드의 prev를 현재 tail로 지정
5. 새 노드를 새로운 tail로 지정
6. 길이 증감
7. 리스트 반환

### `pop`

1. 헤드가 없으면 undefined 반환
2. 현재의 tail을 리턴할 임시 변수에 저장
3. 길이가 1이면 head와 tail 모두 null
4. 현재의 tail을 tail.prev로 지정
5. 새로운 tail 노드의 next를 null로 지정
6. 이전 tail의 prev도 null로 설정
7. 리스트 길이 1 감소
8. 원래의 tail이 저장된 임시 변수 반환

### `shift`

1. 현재의 head를 찾아 next를 새로운 head로 설정
2. 새로운 head의 prev를 null
3. 이전 head가 저장된 임시 변수의 next도 null 로 설정

### `unshift`

1. 새로운 노드 생성
2. 현재 head의 prev에 새로운 노드 설정
3. 새로운 노드의 next에 현재 head 설정
4. head에 새로운 노드 설정
5. 리스트 길이 1 증가
6. 리스트 반환

### `get`

- 단일 연결 리스트와 같지만, 아주 작은 최적화가 추가됨
1. 정상적 인덱스 범위를 벗어나면 null 반환
2. 인덱스가 리스트 길이를 반으로 나눈 것보다 작으면 head부터 순회, 크면 tail부터 순회

### `set`

- 앞서 구현한 `get` 메서드 활용
- `get` 메서드가 반환한 노드의 값을 인자로 받은 값으로 업데이트

### `insert`

- `get` 메서드 활용
1. 인덱스 유효성 확인
2. index가 0이면 `unshift`, 길이와 같으면 `push` 활용
3. `get` 메서드 활용해 해당 `인덱스 - 1`의 노드(prev노드) 가져오기
4. 이전 노드의 next를 임시 변수에 저장
5. 이전 노드의 next를 새로운 노드로 설정
6. 새 노드의 prev를 이전 노드로 설정
7. 새 노드의 next를 임시 변수에 저장된 노드로 설정
8. 임시 변수에 저장된 노드의 prev를 새 노드로 설정
9. 길이 1 증가

### `remove`

1. 인덱스 유효성 확인
2. index 0이면 `shift`, `길이 - 1`이면 `pop` 활용
3. get 메서드 활용해서 해당 인덱스 노드 가져오기
4. 해당 노드의 prev와 next 노드끼리 연결해주기
5. 해당 노드의 prev와 next를 null로 설정
6. 길이 1 감소
7. 제거된 노드 반환

```jsx
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (!this.head) return undefined;
		var poppedNode = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}
		this.length--;
		return poppedNode;
	}
	shift() {
		if (!this.head) return undefined;
		var oldHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}
		this.length--;
		return oldHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		var count, current;
		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while(count !== index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while(count !== index) {
				current = current.prev;
				count--;
			}
		}
		return current;
	}
	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode != null) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);
		
		var newNode = new Node(val);
		var beforeNode = this.get(index - 1);
		var afterNode = beforeNode.next;
		
		beforeNode.next = newNode;
		newNode.prev = beforeNode;
		newNode.next = afterNode;
		afterNode.prev = newNode;
		
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		var removedNode = this.get(index);
		var beforeNode = removedNode.prev;
		var afterNode = removedNode.next;
		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		//removedNode.prev.next = removedNode.next;
		//removedNode.next.prev = removedNode.prev;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;
		return removedNode;
	}
}
```

## 이중 연결 리스트의 빅오 복잡도

- 삽입 : O(1)
- 제거 : O(1)
- 검색 : O(N)
    - 정확히 말하면 O(N/2)이지만, 여전히 O(N)
- 접근 : O(N)
