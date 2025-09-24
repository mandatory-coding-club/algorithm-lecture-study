// 가변적인 수의 인수를 받아들이고 전달된 인자 중 중복된 요소가 있는지 확인
// Solution
// 요소의 등장 빈도를 저장하는 객체 생성 (frequency counter 패턴 사용)
function areThereDuplicates(...args) {
  let frequency = {};
  
  for (let val of args) {
    if (frequency[val]) {
      return true;
    }
      
    frequency[val] = 1;
  }
  
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
