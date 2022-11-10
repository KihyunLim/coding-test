function naiveStringSearch(str1, str2) {
  if (str1.length < str2.length) {
    return null;
  }
  
  let res = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[0]) {
      for (let j = 0; j < str2.length; j++) {
        if (str1[i+j] !== str2[j]) {
          break;
        } else if (str1[i+j] === str2[j] && (j === str2.length - 1)) {
          res++;
        }
      }
    }
  }

  return res;
}

console.log(naiveStringSearch('qwerzsdomgasdf', 'omg'));
console.log(naiveStringSearch('qwerzsdomgasdfomg', 'omg'));
console.log(naiveStringSearch('qwerzsdomgasdfomg', 'fff'));