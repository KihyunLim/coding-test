/* 
[14,2,100,99,1,10]
[14,2,100]/[99,1,10]
[14,2]/[100] [99,1]/[10]
[14] [2] [100] [99] [1] [10]
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return mergeArrays(left, right);
}

function mergeArrays(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let res = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
    } else {
      res.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    res.push(arr1[p1]);
    p1++;
  }
  while (p2 < arr2.length) {
    res.push(arr2[p2]);
    p2++;
  }

  return res;
}

mergeSort([14,2,100,99,1,10]);