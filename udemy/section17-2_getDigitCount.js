function getDigitCount(num) {
  let count = 0;

  while (num >= 1) {
    count++;
    num = num * 0.1;
  }

  return count;
}

getDigitCount(1); //1
getDigitCount(25); //2
getDigitCount(314); //3

//솔루션 - 이래서 수학을 배우는구나...
function getDigitCount(num) {
  if (num === 0) {
    return 1;
  }
  
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}