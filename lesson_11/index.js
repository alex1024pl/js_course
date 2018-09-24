'use strict'

var testObj = {
  a: 1,
  b: 'bbb',
  c: []
},

testArray = ['a', 'e', 'b'];

function removeKeys1(obj, arr) {
  Object.getOwnPropertyNames(obj).forEach(function(val){
    if (arr.indexOf(val) >= 0) {
      delete obj[val]
    }
  })
  return obj;
}

console.log(removeKeys1(testObj, testArray));

function remoteKeys2() {
	
}