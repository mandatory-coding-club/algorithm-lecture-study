// 2.
// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    let index1 = str1[i];
    let index2 = str2[i];
    frequencyCounter1[index1] = (frequencyCounter1[index1] || 0) + 1;
    frequencyCounter2[index2] = (frequencyCounter2[index2] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    console.log(key);
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter2[key] !== frequencyCounter1[key]) return false;
  }

  return true;
}
