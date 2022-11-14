/* 
[4,8,2,1,7,5,6,3]
[3,2,1,4,7,5,6,8]
            4                  <- P
    3,2,1       7,5,6,8
      3            7           <- P
  1,2          6,5    8
   1            6              <- P
     2        5
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

  return swap;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pv = pivot(arr, left, right);
  
    quickSort(arr, left, pv - 1);  // left side
    quickSort(arr, pv + 1, right); // right side
  }

  return arr;
}

quickSort([4,8,2,1,5,7,6,3]);
// quickSort([26,23,27,44,17,47,39,42,43,1]);