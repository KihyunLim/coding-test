/* 
capitalizeWords
Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
 */

function capitalizeWords(arr) {
  if (arr.length === 0) {
    return [];
  }
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

console.log(capitalizeWords(['asdf', 'qwer', 'zxcv']));
console.log(capitalizeWords(['asDf', 'qSer', 'zXXxcv']));
console.log(capitalizeWords(['sdasDFaSFDfASDaSFDfasdfd', 'ASDfSDAsdf', 'ASFdasfsfda']));

// 솔루션
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}