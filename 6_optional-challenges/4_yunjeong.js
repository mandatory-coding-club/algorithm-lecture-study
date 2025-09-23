function isSubsequence(str1, str2) {
  if (!str1) return true;
  let i = 0;
 
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
  }
  
  return i === str1.length;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
