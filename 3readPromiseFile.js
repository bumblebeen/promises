var fs = require('fs');

fs.readFilePromise = function(arg, cb) {
  return new Promise (function(resolve, reject){
   fs.readFile(arg, "utf8", function (err, data){
     if(err) {
       if (cb) cb(err);
       reject(err);
     } else {
       resolve(data);
     }
   });
  });
};

fs.readFilePromise("file1.txt").then(function (data) {
   console.log(data);
});
