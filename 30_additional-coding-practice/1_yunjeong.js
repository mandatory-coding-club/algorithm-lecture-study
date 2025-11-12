// SinglyLinkedList 연습
// 1. Node 클래스 작성 - val, next 속성
// 2. SinglyLinkedList 클래스 작성 - head, tail, length 속성

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
  // push 연습
  // SinglyLinkedList의 끝에 노드를 추가. SinglyLinkedList 반환.
  // Solution
  // 1. 새로운 노드 생성
  // 2. head가 존재하지 않으면 (length가 0) head와 tail 둘 다 새 노드로 설정
  // 3. head가 존재하면 기존 tail의 next와 새로운 tail이 새로운 노드를 가리키도록
  // 4. length를 1만큼 증가
  // 5. singlyLinkedList 반환
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // pop 연습
  // SinglyLinkedList 끝에서 노드를 제거. 제거된 노드를 반환
  // Solution
  // 1. head가 존재하지 않으면 (length가 0) undefined 반환
  // 2. 현재 tail을 임시 변수에 저장
  // 3. length 1만큼 감소
  // 4. 감소된 length가 0이면 head와 tail 모두 null로 설정
  // 5. 그 외, current.next가 null이 아닐 때까지 순회하면서 새로운 tail 탐색
  // 6. 새로운 tail 설정. 새로운 tail의 next를 null로 설정
  // 7. 임시 변수에 저장했던 제거된 노드 반환
  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let newTail = current;
      while(current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      // 처음에 this.tail.next를 null로 설정해주지 않아 잘못된 값 반환...
      this.tail.next = null;
    }
    return removedNode;
  }
  // get 연습
  // SinglyLinkedList의 지정된 인덱스에서 노드를 찾아 반환
  // Solution
  // 1. 인덱스 유효성 검사 - null 반환
  // 2. 인덱스를 확인할 count 변수 선언
  // 3. count 변수가 지정된 인덱스와 같을 때까지 순회하면서 노드 탐색
  // 4. 찾은 노드 반환
  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null;
    let count = 0;
    let current = this.head;
    while(count !== idx) {
      current = current.next;
      count++;
    }
    return current;
  }
  // insert 연습
  // 지정된 인덱스에 노드를 삽입. 인덱스가 유효하면 true, 유효하지 않으면 false 반환
  // Solution
  // 1. 유효성 검사 - false 반환
  // 2. 인덱스가 this.length와 같으면 push 호출
  // 3. 새로운 노드 생성
  // 4. idx가 0이면 새로운 노드의 next를 기존의 head로 설정 후, 새로운 head를 새 노드로 지정
  // 5. get 메서드로 (idx - 1)에 해당하는 노드 가져오기
  // 6. 새로운 노드의 next를 가져온 노드의 next로 지정
  // 7. 가져온 노드의 next를 새로운 노드로 지정
  // 8. true 반환
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    let newNode = new Node(val);
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let prevNode = this.get(idx - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
    this.length++;
    return true;
  }
  // rotate 연습
  // 리스트의 모든 노드를 전달된 숫자만큼 회전
  // 시간복잡도 O(n), 공간 복잡도 O(1)
  // Solution
  // 1. 길이가 1이면 언제나 같은 것을 반환
  // 2. n이 양수일 때, n % 길이 === 0 일 때 원점.
  // 3. n이 음수일 때, 예로 길이가 5, n이 -1면 양수 4일 때와 같음
  // 4. 기존 tail의 next를 기존의 head로 지정해서 원형으로 만들어줌
  // 5. rotate(n)은 인덱스 n부터 새로운 시작이라는 뜻! 따라서 n 인덱스에 있는 노드가 새로운 head, 그 노드의 - 1 인덱스에 있는 노드가 새로운 tail 
  // 6. 새로운 tail의 next를 null로 설정
  rotate(n) {
    if (this.length === 1) return this;
    
    if (n > 0) n = n % this.length;
    else if (n < 0) n = this.length + (n % this.length);

    // 계산된 n이 0이면 원점이니까 반환
    if (n === 0) return this;
    let newTail = this.get(n - 1);
    let newHead = newTail.next;

    this.tail.next = this.head;
    this.tail = newTail;
    this.tail.next = null;
    this.head = newHead;

    return this;
  }
  // set 연습
  // 인덱스와 값을 받아 해당 인덱스에 있는 SinglyLinkedList의 노드 값을 새 값으로 업데이트. 결과에 따라 true, false를 반환.
  // Solution
  // 1. 인덱스 유효성 검사 - false 반환
  // 2. 인덱스 체크할 count 변수 선언
  // 3. count가 인덱스와 같아질 때까지 순회하면서 노드 탐색
  // => 1, 2, 3. 미리 정의된 get 함수 사용
  // 4. 해당 노드의 val을 새로운 값으로 설정
  // 5. true 반환
  set(idx, val) {
    // 빈 배열일 때 인덱스 0 혹은 배열의 맨 끝에 set 하는 예제를 위해 새롭게 push! 하도록 코드 추가함.
    if (idx === this.length) return !!this.push(val);
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  // remove 연습
  // SinglyLinkedList의 지정된 인덱스에서 노드를 제거. 인덱스가 유효하면 제거된 노드 반환. 인덱스가 유효하지 않으면 undefined 반환
  // Solution
  // 1. 인덱스 유효성 검사 - undefined 반환
  // 2. 인덱스가 (길이 - 1) 이면 pop 호출
  // 3. 인덱스가 0이면 새로운 head를 기존 head의 next로 지정
  // 4. get 함수 이용해서 (인덱스 - 1)의 노드 가져오기
  // 5. 가져온 노드의 next를 제거된 노드를 저장할 임시 변수에 저장.
  // 6. 가져온 노드의 새로운 next를 제거된 노드의 next로 지정
  // 7. 길이 1만큼 감소
  // 8. 제거된 노드 반환
  remove(idx) {
    if (idx < 0 || idx > this.length - 1) return undefined;
    if (idx === (this.length - 1)) return this.pop();
    let removedNode;
    if (idx === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prevNode = this.get(idx - 1);
      removedNode = prevNode.next;
      prevNode.next = removedNode.next;
    }
    this.length--;
    return removedNode;
  }
}

var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.length; // 1
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 5
 
singlyLinkedList.push(10); // singlyLinkedList
singlyLinkedList.length; // 2
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.tail.val; // 10
 
singlyLinkedList.push(15); // singlyLinkedList
singlyLinkedList.length; // 3
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.tail.val; // 15

singlyLinkedList.pop().val; // 15
singlyLinkedList.tail.val; // 10
singlyLinkedList.length; // 2
singlyLinkedList.pop().val; // 10
singlyLinkedList.length; // 1
singlyLinkedList.pop().val; // 5
singlyLinkedList.length; // 0
singlyLinkedList.pop(); // undefined
singlyLinkedList.length; // 0

var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.get(0).val // 5
singlyLinkedList.get(1).val // 10
singlyLinkedList.get(2).val // 15
singlyLinkedList.get(3).val // 20
singlyLinkedList.get(4) // null
singlyLinkedList.insert(2,12); // true
singlyLinkedList.insert(100,12); // false
singlyLinkedList.length // 5
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 12
singlyLinkedList.head.next.next.next.val // 15
singlyLinkedList.head.next.next.next.next.val // 20

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next // null
 
singlyLinkedList.insert(5,25); // true
singlyLinkedList.head.next.next.next.next.next.val //25
singlyLinkedList.tail.val // 25

var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.set(0,10) // true
singlyLinkedList.set(1,2) // true
singlyLinkedList.length // 2
singlyLinkedList.head.val // 10
 
singlyLinkedList.set(10,10) // false

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
singlyLinkedList.remove(100); // undefined
singlyLinkedList.length // 3
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 20
