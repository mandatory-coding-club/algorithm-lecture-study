// 최대 이진 힙의 inset, extractMax 매서드 구현하기

class MaxBinaryHeap
{
    constructor()
    {
        this.values = [];
    }

    insert(element)
    {
        this.values.push(element);
        this.bubbleUp();
    }

    //마지막 원소와 부모 원소와 비교하면서 교체
    bubbleUp()
    {
        //초기값은 맨 마지막 idx
        let idx = this.values.length - 1;
        while(idx > 0)
        {
            //부모랑 비교해서 교체
            let parentIdx = Math.floor((idx-1)/2);
            if(this.values[idx] < this.values[parentIdx]) break;

            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx], this.values[idx]]
            idx = parentIdx;
        }
    }

    //가장 높은 값 추출
    extractMax()
    {
        //root와 마지막 원소의 위치를 교체. 후 sink 다운

        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0)
        {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;

    }

    sinkDown()
    {
        //자식 둘과 비교해서 더 큰 값 자식 값을 머리로 올린다.

        //신규 root가 초기값.
        let idx = 0;
        let leftChild, rightChild;
        const length = this.values.length;

        while(idx < length)
        {
            let element = this.values[idx];

            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2;

            let swap = null;

            if(leftChildIdx < length)
            {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) swap = leftChildIdx;
            }
            if(rightChildIdx < length)
            {
                rightChild = this.values[rightChildIdx];
                if(rightChild > element && rightChild > leftChild) swap = rightChildIdx;
            }
            if(swap === null) break;
            [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];

            idx = swap;
        }
    }

    print()
    {
        console.log(this.values);
    }
}

//     20
//   17   18
// 13 11 15

var heap = new MaxBinaryHeap();
heap.insert(20);
heap.insert(17);
heap.insert(15);
heap.insert(13);
heap.insert(11);
heap.insert(18);
heap.print(); //[ 20, 17, 18, 13, 11, 15 ]
heap.extractMax();
heap.print(); //[ 18, 17, 15, 13, 11]