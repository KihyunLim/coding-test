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
  let swap = start;
  
  for (let i = start + 1; i <= end; i++) {
    if (pv > arr[i]) {
      swap++;
      let temp = arr[i];
      arr[i] = arr[swap];
      arr[swap] = temp;
    }
  }

  if (swap !== start) {
    let temp = arr[swap];
    arr[swap] = arr[start];
    arr[start] = temp;
  }

  return arr;
}

function quickSort(arr) {
  let newArr = pivot(arr);
}

// pivot([4,8,2,1,5,7,6,3]);
// pivot([26,23,27,44,17,47,39,42,43,1]);