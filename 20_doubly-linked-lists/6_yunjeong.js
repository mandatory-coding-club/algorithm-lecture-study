// DLL pop 구현
// Solution
// 1. 빈 리스트인 경우 undefined 반환
// 2. 기존 tail 임시 변수에 저장
// 3. 기존 tail의 prev를 새로운 tail로 설정
// 4. 새로운 tail의 next를 null로, 기존 tail의 prev를 null로
//   - 새로운 tail이 null이면 head도 null로 설정
// 5. 리스트 길이 1만큼 감소
// 6. 제거된 노드 반환
class Node {
  constructor (value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;
    this.tail = removedNode.prev;
    
    // 새로운 tail이 null일 경우의 처리 빼먹음
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    removedNode.prev = null;
    this.length--;

    return removedNode;
  }
}
