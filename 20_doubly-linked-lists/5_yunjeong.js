// DLL remove 구현
// Solution
// 1. 인덱스 유효성 확인. undefined 반환
// 2. (리스트 길이 / 2) 기준으로 head 또는 tail부터 시작해 해당 인덱스의 노드 찾기
// 3. 해당 노드의 prev와 next를 서로 연결해주기
//   - prev가 null인 경우, 다음 노드가 새로운 head
//   - next가 null인 경우, 이전 노드가 새로운 tail
// 4. 해당 노드의 prev와 next를 null로 설정
// 5. 리스트 길이 1만큼 감소
// 6. 제거된 노드 반환
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
  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;
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
    return current;
  }
  remove(index) {
    let removedNode = this.get(index);
    if (!removedNode) return undefined;
       
    let prevNode = removedNode.prev;
    let nextNode = removedNode.next;
    
    // prevNode나 nextNode가 null 일 경우 head와 tail 새로 설정해주는 걸 빼먹음!
    if(prevNode) prevNode.next = nextNode;
    else this.head = nextNode;
    
    if(nextNode) nextNode.prev = prevNode;
    else this.tail = prevNode;
    
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    
    return removedNode;
  }
}
