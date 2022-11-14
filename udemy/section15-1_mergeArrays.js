/* 
[1,10,50], [2,14,99,100] 1 2
[1] 10 2
[1,2] 10 14
[1,2,10] 50 14
[1,2,10,14] 50 99
[1,2,10,14,50] - 99
[1,2,10,14,50,99] - 100
[1,2,10,14,99,100] 
 */

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

  // 같은 길이의 배열이고 arr1의 값이 클 경우 버그가 있네..
  // if (arr1.length > arr2.length) {
  //   res = res.concat(arr1.slice(p1));
  // } else {
  //   res = res.concat(arr2.slice(p2));
  // }
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

mergeArrays([1,10,50], [2,14,99,100]);