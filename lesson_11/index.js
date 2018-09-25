'use strict'

let tObj = {
  a: 1,
  b: 'bbb',
  c: []
},

tArray = ['a', 'e', 'b'];

function removeKeys1(obj, arr) {
  Object.getOwnPropertyNames(obj).forEach(function(val){
    if (arr.indexOf(val) >= 0) {
      delete obj[val]
    }
  })
  return obj;
}

console.log(removeKeys1(tObj, tArray));

function remoteKeys2() {
	
}