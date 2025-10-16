## 이진 힙 (Binary Heap)

- 힙은 트리의 일종
- MaxBinaryHeap
    - 부모는 항상 자식 노드보다 큰 값을 가짐
    - 부모 노드는 최대 2개의 자식 노드
    - 최소의 공간 차지. 왼쪽, 오른쪽 노드를 다 채워야만 그 다음 레벨로 내려감
    - 자식 중에서는 왼쪽 노드가 먼저 채워짐
- MinBinaryHeap
    - 부모는 항상 자식 노드보다 작은 값을 가짐
    - 가장 작은 노드가 제일 위에 위치
- 형제 노드 사이에는 특별한 순서가 없다.
- 우선순위 큐를 만들기 위해 사용한다.
- 그래프 순회에도 자주 사용됨

## 힙 정렬

- 배열을 사용하여 구현할 때, 모든 n 인덱스 노드에 대해, 왼쪽 자식은 `2n+1` 인덱스에, 오른쪽 자식은 `2n+2` 인덱스에 위치한다.
- 부모 노드의 인덱스는 `floored (n-1)/2`

### Insert 메소드

- 최대 힙
    1. 배열 끝에 노드 추가
    2. 알맞은 위치 찾을 때까지 버블업
        1. 부모 노드와 비교 후 교환

### ExtractMax

- remove 메소드
- 최대 이진 힙에서는 최대값을, 최소 이진 힙에서는 최소값을 추출해내는 메서드
- 기존 루트를 제거하고, 나머지 요소들을 다시 재정렬해야 한다. (sink down || bubble down)
    1. 루트를 제거
    2. 배열 가장 마지막 요소를 새로운 루트 자리로 가져옴
    3. 자식 노드와 값을 비교하며 자리를 바꾸어 나감

```jsx
class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while(idx > 0) {
			let parentIdx = Math.floor((idx - 1)/2);
			let parent = this.values[parentIdx];
			if(element <= parent) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();
		if(this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return max;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while(true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			
			if(leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if(leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if(rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if(
						(swap === null && rightChild > element) || 
						(swap !== null && rightChild > leftChild) 
				) {
					swap = rightChildIdx;
				}
			}
			if(swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.values = [41, 39, 33, 18, 27, 12];
heap.insert(55);
```

## 우선순위 큐 (Priority Queue)

- 각 요소가 그에 해당하는 우선순위를 가지는 큐
- 최상의 우선순위를 가지는 것을 먼저 처리 ex) unix
- 최소 이진 힙 활용하여 구현. 노드의 값 대신 우선순위를 비교

```jsx
class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority);
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while(idx > 0) {
			let parentIdx = Math.floor((idx - 1)/2);
			let parent = this.values[parentIdx];
			if(element.priority >= parent.priority) break;
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if(this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown();
		}
		return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while(true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;
			
			if(leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if(leftChild.priority < element.priority) {
					swap = leftChildIdx;
				}
			}
			if(rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if(
						(swap === null && rightChild.priority < element.priority) || 
						(swap !== null && rightChild.priority < leftChild.priority) 
				) {
					swap = rightChildIdx;
				}
			}
			if(swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

class Node {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
```

## 이진 힙의 빅오 복잡도

- 삽입과 삭제에서 빠른 효율성
- 삽입 : O(log N)
- 삭제 : O(log N)
- 검색 : O(N)
