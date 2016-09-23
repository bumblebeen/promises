var promise = new Promise(function (resolve, reject) {
  var value = doSomething();
  if (value) {
    resolve(value);
  }
  else {
    reject('You have broken our promise to each other');
  }
}).then(function (value){
  // success
  console.log('You have fulfilled your promise with ' + value);
  return nextThing(value);
}).catch(rejectFunction);

function doSomething(){
  console.log('Im doing something to fulfill my promise');
//  return 2;
}

function nextThing(val){
 console.log(val + ' is very delighted');
}

function rejectFunction(err){
 console.log(err);
}
