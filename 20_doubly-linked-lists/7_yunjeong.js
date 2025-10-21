// DLL get 구현
// Solution
// 1. 유효 인덱스 검사
// 2. (리스트 길이 / 2) 를 기준으로 시작점을 head 또는 tail로 구분
// 3. 해당 인덱스에 도달할 때까지 순회
//   - (길이 / 2) 보다 작으면 head부터 시작해 next를 사용해 순회
//   - 그 외에는 tail부터 시작해 prev를 이용해 역순회
// 4. 해당 인덱스의 노드 반환
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, count;
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
}
