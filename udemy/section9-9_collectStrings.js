/* 
collectStrings
Write a function called collectStrings which 
accepts an object and 
returns an array of all the values in the object that have a typeof string
 */

let obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

function collectStrings(obj) {
  let res = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      res.push(obj[key]);
    } else {
      res = res.concat(collectStrings(obj[key]));
    }
  }

  return res;
}

collectStrings(obj) // ["foo", "bar", "baz"])

// 솔루션
// Helper 메소드 재귀 버전
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
      for(var key in o) {
          if(typeof o[key] === 'string') {
              stringsArr.push(o[key]);
          }
          else if(typeof o[key] === 'object') {
              return gatherStrings(o[key]);
          }
      }
  }

  gatherStrings(obj);

  return stringsArr;
}

// 순수 재귀 버전
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
      if(typeof obj[key] === 'string') {
          stringsArr.push(obj[key]);
      }
      else if(typeof obj[key] === 'object') {
          stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
  }

  return stringsArr;
}