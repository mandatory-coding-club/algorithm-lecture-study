function areThereDuplicates(...args) {
  let arr = args.concat();
  let frequency = {};
  
  for (let val of arr) {
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
