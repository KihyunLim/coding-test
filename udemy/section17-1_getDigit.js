function getPower(n) {
  return n > 0 ? 10 * getPower(n - 1) : 1;
}

function getDigit(num, n) {
  if (n === 0) {
    return num % 10;
  }

  let digit1 = getPower(n + 1);
  let digit2 = n === 0 ? 0 : getPower(n);

  return (num % digit1 - num % digit2) / digit2;
}

getDigit(12345, 0); //5 10-5
getDigit(12345, 1); //4 100-45 10-5
getDigit(12345, 2); //3 1000-345 100-45 10-5
getDigit(12345, 3); //2
getDigit(12345, 4); //1
getDigit(12345, 5); //0

//솔루션 - 도랏... 나는야 개똥멍청이~~~~~~~
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}