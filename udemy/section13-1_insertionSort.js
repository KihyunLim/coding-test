/* 
[2 ,1,9,76,4]
[1,2 ,9,76,4]

[1,2 ,9,76,4]
[1,2,9 ,76,4]

[1,2,9, 76,4]
[1,2,9,76 ,4]

[1,2,9,76 ,4]
[1,2,4,9,76]


[9 ,1,2,76,4]
[9 ,9,2,76,4] 1
[1,9 ,2,76,4]

[1,9 ,2,76,4]
[1,9 ,9,76,4] 2
[1,2 ,9,76,4]

[1,2,9 ,76,4]
[1,2,9,76 ,4]

[1,2,9,76 ,4]
[1,2,9,76 ,76] 4
[1,2,9,9 ,76] 4
[1,2,4,9,76]
 */

function insertionSort(arr) {
  let currentVal;

  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return 
}