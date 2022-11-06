/* 
  Frequency Counter - validAnagram
  Given two strings, write a function to determine if the second string is an anagram of the first. 
  An anagram is a word, phrase, or name formed by rearranging the letters of another, 
  such as cinema, formed from iceman.

  Examples:

  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true
  Note: You may assume the string contains only lowercase alphabets.

  Time Complexity - O(n)
 */

function validAnagram(str1, str2){
  if (str1.length !== str2.length) {
      return false;
  }

  const obj1 = {};
  const obj2 = {};

  for(let s of str1) {
      obj1[s] = obj1[s] ? obj1[s] + 1 : 1;
  }
  for(let s of str2) {
      obj2[s] = obj2[s] ? obj2[s] + 1 : 1;
  }

  for(let c in obj1) {
      if (obj1[c] !== obj2[c]) {
          return false;
      }
  }
  
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat","car")) // false)); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true