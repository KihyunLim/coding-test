function naiveSearch(str1, str2) {
  if (str1.length < str2.length) {
    return null;
  }

  let res = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) { // -> 굳이 안해도 될 분기였긴 하네
      for (let j = 0; j < str2.length; j++) {
        if (str1[i+j] !== str2[j]) {
          break;
        } else if (str1[i+j] === str2[j] && (j === str2.length - 1)) {
          // -> else if 도 필요 없었고
          // -> str1[i+j] === str2[j] 필요 없었네
          res++;
        }
      }
    }
    // 결국 솔루션과 같은 코드가 되네
  }

  return res;
}

console.log(naiveSearch('qwerzsdomgasdf', 'omg'));
console.log(naiveSearch('qwerzsdomgasdfomg', 'omg'));
console.log(naiveSearch('qwerzsdomgasdfomg', 'fff'));

// 솔루션
function naiveSearch(long, short){
    var count = 0;
    for(var i = 0; i < long.length; i++){
        for(var j = 0; j < short.length; j++){
           if(short[j] !== long[i+j]) break;
           if(j === short.length - 1) count++;
        }
    }
    return count;
}