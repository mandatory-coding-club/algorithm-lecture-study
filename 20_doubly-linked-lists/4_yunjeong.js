// DLL set 구현
// Solution
// 1. 인덱스 유효성 확인
// 2. 인덱스가 (리스트 길이 / 2) 보다 같거나 작으면
//   - head부터 차례로 순회 (next 확인)
// 3. 그 외
//   - tail부터 역순으로 순회 (prev 확인)
// 4. 찾은 노드의 값을 새로운 값으로 업데이트
// 5. true 반환
class Node {
  constructor(value) {
    this.value = value;
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
  set(index, value) {
    if (index < 0 || index >= this.length) return false;
    let current;
    let count;
    if (index <= this.length / 2) {
      current = this.head;
      count = 0;
      while(count !== index) {
        current = current.next;
        count++;
      }
    } else {
      current = this.tail;
      count = this.length - 1;
      while(count !== index) {
        current = current.prev;
        count--;
      }
    }
    current.value = value;
    
    return true;
  }
}
