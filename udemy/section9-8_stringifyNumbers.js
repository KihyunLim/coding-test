/* 
stringifyNumbers
Write a function called stringifyNumbers 
which takes in an object and finds all of the values 
which are numbers and converts them to strings. 
Recursion would be a great way to solve this!
 */


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}/* >>> {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = String(obj[key]);
    } else {
      stringifyNumbers(obj[key]);
    }
  }

  return obj;
}

console.log(stringifyNumbers(obj));

// 솔루션
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}