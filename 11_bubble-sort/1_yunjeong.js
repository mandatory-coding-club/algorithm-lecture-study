// 버블 정렬 함수 작성
// Solution
// 배열을 순회하면서, 다음 인덱스 값과 비교
// 필요하면 서로 교환
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }  
  return arr;
}

function bubbleSort2(arr) {
  let swapped;
  for (let i = arr.length; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
