/* 
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(arr){
  let res = [];
  
  function recursive(arr2) {
    if (arr2.length === 0) {
      return;
    }

    if (!(arr2[0] instanceof Array)) {
      res.push(arr2[0]);
    }

    recursive(arr2.slice(1));
  }

  return recursive(arr);
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// 솔루션
function flatten(oldArr){
  var newArr = []
  for(var i = 0; i < oldArr.length; i++){
    if(Array.isArray(oldArr[i])){
        newArr = newArr.concat(flatten(oldArr[i]))
    } else {
        newArr.push(oldArr[i])
    }
  } 
  return newArr;
}