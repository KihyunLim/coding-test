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

mostDigits([1234,56,7]); //4
// mostDigits([1,1,11111,1]); //5
// mostDigits([12,34,56,78]); //2