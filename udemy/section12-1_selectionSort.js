/* 
[0 ,2,34,22,10,19,17]

[0,2 ,34,22,10,19,17]

[0,2,34 ,22,10*,19,17]
[0,2,10 ,22,34,19,17]

[0,2,10,22 ,34,19,17*]
[0,2,10,17 ,34,19,22]

[0,2,10,17,34 ,19*,22]
[0,2,10,17,19 ,34,22]

[0,2,10,17,19,34 ,22*]
[0,2,10,17,19,22 ,34]
[0,2,10,17,19,22,34]
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);