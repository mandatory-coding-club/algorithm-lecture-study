// Max Binary Heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // 삽입
  // 배열 끝에 추가 후 부모와 비교하며 버블업
  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  //끝 요소와 부모 크기 비교
  bubbleUp() {
    let lastIdx = this.values.length - 1;
    const val = this.values[lastIdx];
    while (lastIdx > 0) {
      let parentIdx = Math.floor((lastIdx - 1) / 2);
      const parent = this.values[parentIdx];

      if (parent < val) {
        [this.values[parentIdx], this.values[lastIdx]] = [
          this.values[lastIdx],
          this.values[parentIdx],
        ];
        lastIdx = parentIdx;
      } else break;
    }
  }

  //최댓값 추출
  // 1️. 루트 제거
  // 2️. 마지막 원소를 루트로 옮김
  // 3️. 자식과 비교하며 위치 이동 (sinkDown)
  extractMax() {
    const max = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return max;
  }

  //왼쪽 자식 2i+1, 오른쪽 자식 2i+2
  sinkDown() {
    let idx = 0;
    const val = this.values[0];

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let left = this.values[leftIdx];
      let right = this.values[rightIdx];
      let swap = null;

      if (leftIdx < this.values.length && val < left) {
        swap = leftIdx;
      }

      if (rightIdx < this.values.length) {
        if ((val < right && !swap) || (left < right && swap)) {
          swap = rightIdx;
        }
      }

      if (!swap) break;

      [this.values[idx], this.values[swap]] = [
        this.values[swap],
        this.values[idx],
      ];

      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap); // [55, 39, 41, 18, 27, 12, 33]
console.log(heap.extractMax(), heap); //55, [ 41, 39, 33, 18, 27, 12 ]
