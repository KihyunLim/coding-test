/* 
[1556,4,3556,593,408,4386,902,7,8157,86,9637,29] 0
0 : 
1 : 
2 : 902, 
3 : 593, 
4 : 4
5 : 
6 : 1556, 3556, 4386, 86, 
7 : 7, 8157, 9637, 
8 : 408, 
9 : 29
[902,593,4,1556,3556,4386,86,7,8157,9637,408,29] 1
0 : 902, 4, 7, 408, 
1 : 
2 : 29
3 : 9637, 
4 : 
5 : 1556, 3556, 8157, 
6 : 
7 : 
8 : 4386, 86, 
9 : 593, 
[902,4,7,408,29,9637,1556,3556,8157,4386,86,593] 2
0 : 4, 7, 29, 86, 
1 : 8157, 
2 : 
3 : 4386, 
4 : 408, 
5 : 1556, 3556, 593, 
6 : 9637, 
7 : 
8 : 
9 : 902, 
[4,7,29,86,8157,4386,408,1556,3556,593,9637,902] 3
0 : 4, 7, 29, 86, 408, 593, 902
1 : 1556, 
2 : 
3 : 3556, 
4 : 4386, 
5 : 
6 : 
7 : 
8 : 8157, 
9 : 9637, 
[4,7,29,86,408,593,902,1556,3556,4386,8157,9637]
 */
function getDigitCount(num) {
  if (num === 0) {
    return 1;
  }
  
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let most = 0;

  for (let n of arr) {
    let count = getDigitCount(n);

    if (most < count) {
      most = count;
    }
  }

  return most;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function radixSort(arr) {
  let md = mostDigits(arr);

  for (let i = 0; i < md; i++) {
    // let arrDigit = new Array(10).fill([]);
    let arrDigit = Array.from({length: 10}, () => []);
    
    for (let j = 0; j < arr.length; j++) {
      // arrDigit[getDigit(arr[j], i)] = arrDigit[getDigit(arr[j], i)].concat(arr[j]);
      arrDigit[getDigit(arr[j], i)].push(arr[j]);
    }

    // 이걸 한줄로 이렇게 되네;; 아직 멀었구나
    arr = [].concat(...arrDigit);
    // arr = [];
    // for (let k = 0; k < arrDigit.length; k++) {
    //   arr = arr.concat(arrDigit[k]);
    // }
  }

  return arr;
}

radixSort([1556,4,3556,593,408,4386,902,7,8157,86,9637,29]);

// 이게 외않되??
// var arrDigit2 = new Array(10).fill(() => []);
// arrDigit2[4].push(2);
// 이건 되네;;
// var arrDigit2 = Array.from({length: 10}, () => []);
// arrDigit2[4].push(2);
// console.log([].concat(...arrDigit2));
