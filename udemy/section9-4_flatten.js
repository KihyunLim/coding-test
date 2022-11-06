/* 
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

function flatten(prevArr){
  let newArr = [];

  for(let i = 0; i < prevArr.length; i++) {
    if(Array.isArray(prevArr[i])) {
      newArr = newArr.concat(flatten(prevArr[i]));
    } else {
      newArr.push(prevArr[i]);
    }
  }

  return newArr;
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