# 🧩 이중 연결 리스트 (Doubly Linked List)

## 📘 개요

**이중 연결 리스트(Doubly Linked List)** 는
각 노드가 **이전 노드(`prev`)** 와 **다음 노드(`next`)** 모두를 참조할 수 있는 구조의 리스트다.

단일 연결 리스트(Singly Linked List)와 비교했을 때,
**앞뒤 방향 모두 순회가 가능**하다는 장점이 있지만,
그만큼 **메모리 사용량이 늘어나고 구현이 복잡**해진다는 단점도 있다.

---

## 🧱 노드 구조

각 노드는 세 가지 속성을 가진다:

* `val`: 노드가 가진 실제 데이터
* `next`: 다음 노드에 대한 참조
* `prev`: 이전 노드에 대한 참조

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
```

---

## 🪢 DoublyLinkedList 클래스

이중 연결 리스트는 다음과 같은 속성을 갖는다.

* `head`: 리스트의 첫 번째 노드
* `tail`: 리스트의 마지막 노드
* `length`: 노드의 개수

```js
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

---

## 📌 주요 메서드 정리

### 1️⃣ `push(val)`

맨 뒤에 노드를 추가한다.

* 리스트가 비어 있다면 `head`와 `tail` 모두 새 노드로 설정
* 아니라면 기존 `tail` 뒤에 새 노드 연결

```js
push(val) {
  const newNode = new Node(val);
  if (this.length === 0) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  this.length++;
  return this;
}
```

📘 **예시**

```js
const list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
```

👉 리스트: `Harry ⇄ Ron ⇄ Hermione`

---

### 2️⃣ `pop()`

맨 뒤 노드를 제거하고 반환한다.

```js
pop() {
  if (!this.head) return undefined;
  const poppedNode = this.tail;

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
```

📘 **예시**

```js
list.pop(); // Hermione 제거
```

👉 리스트: `Harry ⇄ Ron`

---

### 3️⃣ `shift()`

맨 앞 노드를 제거하고 반환한다.

```js
shift() {
  if (this.length === 0) return undefined;
  const oldHead = this.head;

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
```

📘 **예시**

```js
list.shift(); // Harry 제거
```

👉 리스트: `Ron`

---

### 4️⃣ `unshift(val)`

맨 앞에 노드를 추가한다.

```js
unshift(val) {
  const newNode = new Node(val);
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
```

📘 **예시**

```js
list.unshift("Draco");
```

👉 리스트: `Draco ⇄ Ron`

---

### 5️⃣ `get(index)`

특정 인덱스의 노드를 반환한다.

* 인덱스가 `리스트 길이의 절반 이하`이면 **앞에서부터**
* 크면 **뒤에서부터** 탐색하여 효율을 높인다.

```js
get(index) {
  if (index < 0 || index >= this.length) return null;
  let count, current;

  if (index <= this.length / 2) {
    count = 0;
    current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
  } else {
    count = this.length - 1;
    current = this.tail;
    while (count !== index) {
      current = current.prev;
      count--;
    }
  }
  return current;
}
```

📘 **예시**

```js
list.get(1); // Ron 반환
```

---

### 6️⃣ `set(index, val)`

특정 인덱스의 노드 값을 변경한다.

```js
set(index, val) {
  const foundNode = this.get(index);
  if (foundNode != null) {
    foundNode.val = val;
    return true;
  }
  return false;
}
```

📘 **예시**

```js
list.set(0, "Harry Potter");
```

👉 리스트: `Harry Potter ⇄ Ron`

---

### 7️⃣ `insert(index, val)`

특정 위치에 새 노드를 삽입한다.

```js
insert(index, val) {
  if (index < 0 || index > this.length) return false;
  if (index === 0) return !!this.unshift(val);
  if (index === this.length) return !!this.push(val);

  const newNode = new Node(val);
  const beforeNode = this.get(index - 1);
  const afterNode = beforeNode.next;

  beforeNode.next = newNode;
  newNode.prev = beforeNode;
  newNode.next = afterNode;
  afterNode.prev = newNode;

  this.length++;
  return true;
}
```

📘 **예시**

```js
list.insert(1, "Luna");
```

👉 리스트: `Harry ⇄ Luna ⇄ Ron`

---

## 🧮 시간 복잡도 요약

|           메서드          | 평균 시간 복잡도 | 설명               |
| :--------------------: | :-------: | :--------------- |
|      `push`, `pop`     |    O(1)   | 끝에서 추가/제거        |
|   `shift`, `unshift`   |    O(1)   | 앞에서 추가/제거        |
| `get`, `set`, `insert` |    O(n)   | 인덱스 접근은 선형 시간 필요 |

---

## 💡 핵심 요약

* **양방향 탐색 가능** (next / prev)
* **삽입과 삭제는 효율적**
  (특히 중간 노드 제거 시 단일 리스트보다 유리)
* **메모리 사용량 증가**
  (prev 포인터를 위한 공간 필요)

---

## ✅ 전체 코드

```js
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
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
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
    const poppedNode = this.tail;
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
    if (this.length === 0) return undefined;
    const oldHead = this.head;
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
    const newNode = new Node(val);
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
    let count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
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

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }
}

const list = new DoublyLinkedList();
list.push("Harry");
list.push("Ron");
list.push("Hermione");
```
