/* 
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2){
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1;
    obj2[str2[i]] ? obj2[str2[i]]++ : obj2[str2[i]] = 1;
  }

  for(let c in obj1) {
    if (obj1[c] !== obj2[c]) {
        return false;
    }
  }

  return true;
}

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false