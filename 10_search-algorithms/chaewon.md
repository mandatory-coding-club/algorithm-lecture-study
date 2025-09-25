# 검색 알고리즘

## 1. 선형 검색
- js에서는 indexOf, includes, find, findIndex
- 하나씩 순회하는 검색법

```javascript
function linearSearch(arr, val)
{
   for (i = 0; i < arr.length; i ++)
   {
       if(arr[i] === val) return i;
   }
   return -1;
}
```

- 선형 검색의 복잡도 O(n). best(1), worst(n). 평균으로 O(n).

## 2. 이진 검색
- 이진검색의 시간복잡도 O(log n)

## 3. 나이브 스트링 서치
- 문자열에서 어떤저떤 부분 문자열 다 찾기 
- 하나씩 매칭하기