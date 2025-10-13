# 🧩 Singly Linked List (단일 연결 리스트)

## 📘 개요

배열은 인덱스로 빠르게 접근할 수 있지만,
요소를 **삽입**하거나 **삭제**할 때 비용이 크다.
그래서 **연결 리스트(Linked List)** 가 등장했다.

👉 연결 리스트는 각 요소가 다음 노드의 **참조(포인터)** 를 갖는 **노드(Node)** 들의 연속 구조다.

---

## 🔹 노드(Node)란?

노드는 `value`(값)과 `next`(다음 노드의 포인터)를 가진 객체다.

```js
class Node {
  constructor(val) {
    this.val = val;     // 값
    this.next = null;   // 다음 노드 (기본 null)
  }
}
```

---

## 🔹 단일 연결 리스트 구조

리스트는 `head`(첫 노드), `tail`(마지막 노드), `length`(길이)를 가진다.

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

---

## 🧱 push(val)

리스트 **끝에 노드 추가**

```js
push(val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
}
```

📘 **예시**

```js
const list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);

list.print(); // [10, 20, 30]
```

---

## 🧱 pop()

리스트 **마지막 노드 제거**

```js
pop() {
  if (!this.head) return undefined;
  let current = this.head;
  let newTail = current;

  while (current.next) {
    newTail = current;
    current = current.next;
  }

  this.tail = newTail;
  this.tail.next = null;
  this.length--;

  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }

  return current;
}
```

📘 **예시**

```js
list.pop(); // 마지막 노드 제거
list.print(); // [10, 20]
```

---

## 🧱 shift()

리스트 **첫 번째 노드 제거**

```js
shift() {
  if (!this.head) return undefined;
  const currentHead = this.head;
  this.head = currentHead.next;
  this.length--;
  if (this.length === 0) this.tail = null;
  return currentHead;
}
```

📘 **예시**

```js
list.shift();
list.print(); // [20]
```

---

## 🧱 unshift(val)

리스트 **앞에 노드 추가**

```js
unshift(val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
}
```

📘 **예시**

```js
list.unshift(5);
list.print(); // [5, 20]
```

---

## 🧱 get(index)

특정 **인덱스의 노드 가져오기**

```js
get(index) {
  if (index < 0 || index >= this.length) return null;
  let counter = 0;
  let current = this.head;
  while (counter !== index) {
    current = current.next;
    counter++;
  }
  return current;
}
```

📘 **예시**

```js
list.get(1); // Node { val: 20, next: ... }
```

---

## 🧱 set(index, val)

특정 위치의 노드 값을 **변경**

```js
set(index, val) {
  const foundNode = this.get(index);
  if (foundNode) {
    foundNode.val = val;
    return true;
  }
  return false;
}
```

📘 **예시**

```js
list.set(1, 100);
list.print(); // [5, 100]
```

---

## 🧱 insert(index, val)

특정 위치에 **새 노드 삽입**

```js
insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  const newNode = new Node(val);
  const prev = this.get(index - 1);
  const temp = prev.next;
  prev.next = newNode;
  newNode.next = temp;
  this.length++;
  return true;
}
```

📘 **예시**

```js
list.insert(1, 50);
list.print(); // [5, 50, 100]
```

---

## 🧱 remove(index)

특정 위치의 노드 **삭제**

```js
remove(index) {
  if (index < 0 || index >= this.length) return undefined;
  if (index === 0) return this.shift();
  if (index === this.length - 1) return this.pop();

  const prev = this.get(index - 1);
  const removed = prev.next;
  prev.next = removed.next;
  this.length--;
  return removed;
}
```

📘 **예시**

```js
list.remove(1);
list.print(); // [5, 100]
```

---

## 🧱 reverse()

리스트 **역순으로 뒤집기**

```js
reverse() {
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  let prev = null;
  let next;

  for (let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}
```

📘 **예시**

```js
list.reverse();
list.print(); // [100, 5]
```

---

## 🧱 print()

현재 리스트를 **배열 형태로 출력**

```js
print() {
  const arr = [];
  let current = this.head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  console.log(arr);
}
```

---

## 🎯 전체 예제

```js
const list = new SinglyLinkedList();

list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.push(999);

list.print(); // [100, 201, 250, 350, 999]

list.reverse();
list.print(); // [999, 350, 250, 201, 100]
```

---

## 📊 시간 복잡도 요약

| 메서드     | 시간 복잡도 |
| :------ | :----- |
| push    | O(1)   |
| pop     | O(n)   |
| shift   | O(1)   |
| unshift | O(1)   |
| get     | O(n)   |
| set     | O(n)   |
| insert  | O(n)   |
| remove  | O(n)   |
| reverse | O(n)   |

---

💡 **한줄 요약**
단일 연결 리스트는 배열보다 삽입·삭제가 빠르고,
인덱스로 접근은 느리다.
**순차 탐색 중심 구조**로, 자주 변경되는 데이터에 유리하다.
