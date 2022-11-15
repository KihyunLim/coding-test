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