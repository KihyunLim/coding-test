
/* capitalizeFirst
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
 */

function capitalizeFirst (arr) {
  if (arr.length === 0) {
    return [];
  }

  let str = arr[0];
  str = (str[0]).toUpperCase() + str.slice(1);

  return [str].concat(capitalizeFirst(arr.slice(1)));
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// 솔루션
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}