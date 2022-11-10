/* 
Binary Search Exercise
Write a function called binarySearch 
which accepts a sorted array and a value 
and returns the index at which the value exists. 
Otherwise, return -1.

This algorithm should be more efficient than linearSearch 
- you can read how to implement it here - 
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 */

function binarySearch(arr, target){
  let start = 0;
  let end = arr.length - 1;
  let center = Math.floor(end / 2);
  console.log('center :', center);

  while (1) {
    if (arr[center] === target) {
      return center;
    } else if (start === end) {
      if (arr[start] === target) {
        return start;
      } else {
        return -1;
      }
    } else if (arr[center] > target) {
      end = center - 1;
      center = Math.floor((start + end) / 2);
    } else if (arr[center] < target) {
      start = center + 1;
      center = Math.floor((start + end) / 2);
    }
  }
}

console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)); // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)); // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)); // -1

// 솔루션
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]){
          end = middle - 1;
      } else {
          start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
      return middle;
  }
  return -1;
}
