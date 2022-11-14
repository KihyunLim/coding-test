/* 
[4,8,2,1,5,7,6,3] 4
[4,8 ,2,1,5,7,6,3]
[4,8,2 ,1,5,7,6,3] *
[4,2,8 ,1,5,7,6,3]
[4,2,8,1 ,5,7,6,3] *
[4,2,1,8 ,5,7,6,3] 
[4,2,1,8,5 ,7,6,3] 
[4,2,1,8,5,7 ,6,3] 
[4,2,1,8,5,7,6 ,3] 
[4,2,1,8,5,7,6,3 ] *
[4,2,1,3,5,7,6,8 ]
[3,2,1,4,5,7,6,8]

[3,2,1,4,5,7,6,8]
 */

function pivot(arr, start = 0, end = arr.length - 1) {
  let pv = arr[start];
  let prev = start + 1;
  
  for (let i = prev; i < arr.length; i++) {
    if (pv > arr[i]) {
      let temp = arr[i];
      arr[i] = arr[prev];
      arr[prev] = temp;
      prev++;
    }
  }

  if (prev !== 1) {
    let temp = arr[prev - 1];
    arr[prev - 1] = arr[0];
    arr[0] = temp;
  }

  return arr;
}

pivot([4,8,2,1,5,7,6,3]);
// pivot([26,23,27,44,17,47,39,42,43,1]);