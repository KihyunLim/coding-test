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
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = String(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

/* 
  다른 문제는 리턴만 하면 되면서 왜 이건 바꿔줘야하는데ㅁ니아ㅓㄻ;ㄴ이러ㅏ;ㅁ
  영어를 못하는 내 잘못인게지...ㅠ
  stringifyNumbers should not modify an existing object. Expected '1' to be 1. 
*/
// function stringifyNumbers(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] = String(obj[key]);
//     } else {
//       stringifyNumbers(obj[key]);
//     }
//   }
//
//   return obj;
// }

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