var p = new Promise (function (resolve) {
 console.log('p');
 resolve(2);
 return 1;
}).then(function (i) {
 console.log(i);
});

//console.log(JSON.stringify(p));
