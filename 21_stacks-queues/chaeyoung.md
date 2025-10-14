# 🧱 스택(Stack) & 큐(Queue)

## 🧠 스택(Stack)

### 💡 개념

스택은 **“마지막에 들어온 데이터가 가장 먼저 나가는 (LIFO, Last In First Out)”** 구조  
쌓여 있는 접시 더미를 생각하면 쉬움. 마지막에 올려놓은 접시가 제일 먼저 빠지는 구조

* **추가(push)**: 맨 위에 새로운 데이터를 쌓는다.
* **삭제(pop)**: 맨 위의 데이터를 꺼낸다.

### 📊 스택의 대표적인 활용 예

* **함수 호출(콜 스택)**
* **실행 취소(Undo)** 기능
* **웹 브라우저의 뒤로 가기 / 앞으로 가기**

---

### ⚙️ 구현 방식

배열로도 쉽게 구현할 수 있지만, **연결 리스트(Linked List)** 기반으로 직접 만들어볼 수도 있다.
연결 리스트로 구현하면 `push`와 `pop`이 모두 **O(1)** 시간복잡도를 가진다.

---

### 🧩 예제 코드

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null; // 스택의 맨 위
    this.last = null;  // 스택의 맨 아래
    this.size = 0;     // 요소 개수
  }

  // 데이터 추가
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  // 데이터 제거
  pop() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// ✅ 사용 예시
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
```

### 📈 시간 복잡도

| 연산              | 시간복잡도 |
| --------------- | ----- |
| `push`          | O(1)  |
| `pop`           | O(1)  |
| `peek` (맨 위 확인) | O(1)  |
| `search`        | O(n)  |

---

## 🪣 큐(Queue)

### 💡 개념

큐는 **“먼저 들어온 데이터가 먼저 나가는 (FIFO, First In First Out)”** 구조  
줄 서 있는 사람들을 떠올리면 쉬움. 먼저 선 사람이 먼저 나감.

* **추가(enqueue)**: 뒤쪽에 새로운 데이터를 추가한다.
* **삭제(dequeue)**: 앞쪽에서 데이터를 제거한다.

### 📊 큐의 대표적인 활용 예

* **프린터 대기열**
* **콜센터 대기 시스템**
* **비동기 작업 처리 (이벤트 루프의 큐 등)**

---

### ⚙️ 구현 방식

스택과 마찬가지로 배열로도 가능하지만,
연결 리스트를 이용하면 `enqueue`와 `dequeue` 모두 **O(1)**로 처리할 수 있다.

---

### 🧩 예제 코드

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null; // 맨 앞
    this.last = null;  // 맨 뒤
    this.size = 0;
  }

  // 데이터 추가
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // 데이터 제거
  dequeue() {
    if (!this.first) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// ✅ 사용 예시
const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(queue.dequeue()); // A
console.log(queue.dequeue()); // B
```

---

### 📈 시간 복잡도

| 연산              | 시간복잡도 |
| --------------- | ----- |
| `enqueue`       | O(1)  |
| `dequeue`       | O(1)  |
| `peek` (맨 앞 확인) | O(1)  |
| `search`        | O(n)  |

---

## 🧩 Stack vs Queue 비교

| 구분    | 스택(Stack)   | 큐(Queue)    |
| ----- | ----------- | ----------- |
| 구조    | LIFO (후입선출) | FIFO (선입선출) |
| 추가 위치 | 맨 위         | 맨 뒤         |
| 제거 위치 | 맨 위         | 맨 앞         |
| 예시    | 실행 취소, 콜 스택 | 대기열, 비동기 처리 |

---

### 🚀 요약

* **스택**: 마지막에 넣은 게 제일 먼저 나간다. (접시 더미)
* **큐**: 먼저 넣은 게 제일 먼저 나간다. (줄 서기)
* 둘 다 **연결 리스트**로 구현하면 삽입/삭제가 효율적이다.

