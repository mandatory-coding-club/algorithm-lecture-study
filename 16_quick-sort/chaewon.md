### 퀵 정렬
- 앞선 병합 정렬처럼 분할 정복 방식
- pivot를 정해 해당 원소보다 작은 원소의 숫자를 세 pivot이 적절 위치에 들어가게 함. 그러면 해당 원소가 정렬 상태.
- pivot을 기준으로 앞뒤 배열에 대해 같은 과정을 반복.

#### 의사 코드
- pivot, start, end를 받는다...
- 배열의 start, end 사이에서 pivot을 제자리에 둔다
- pivot을 기준으로 왼배열, 오른배열에 대해 호출
- start, end 값이 같아지면 종료

#### 시간복잡도
BEST n log n
AVG n log n
WOST n^2