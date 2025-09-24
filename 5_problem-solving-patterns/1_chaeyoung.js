// 1.
// FREQUENCY COUNTERS
// This pattern uses objects or sets to collect values/frequencies of values

// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// AN EXAMPLE
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// SOLUTION
// 1. arr1을 1 : 1, 2:1, 3:1 으로 만들고
// 2. arr2를 4:1, 1:1, 9:1 으로 만들고
// 3. 두 객체를 비교하여 모두 같으면 true, 하나라도 다르면 false

function same(arr1, arr2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let key1 = arr1[i];
    let key2 = arr2[i];
    frequencyCounter1[key1] = (frequencyCounter1[key1] || 0) + 1;
    frequencyCounter2[key2] = (frequencyCounter2[key2] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    console.log(key);
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
