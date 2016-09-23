var assert = require('assert');
var fs = require('fs')

describe('Exercise', function() {
    it('promise should timeout', function(done) {
      // create a promise that does the code below 
      // and store it inside the "timeoutPromise"
      // make sure to resolve it after 1s
      global.setTimeout(function(){}, 1000);
      var timeoutPromise;
      // do not modify below this line
      timeoutPromise.then(data => {
        done();
      });
    });

    it('should promisify fs.readFile', function(done) {
      // create a function that accepts a path to a file
      // which reads and returns the data inside (use fs.readFile)
      // and outputs a promise
      fs.readFilePromise = function(arg) {};

      // do not modify below this line
      fs.readFilePromise('exercise/file.txt').then(data => {
        assert(data, "thank you for fulfilling your promise");
        done();
      });
    });

    it('should wait for all promises', function(done) {
      // Use the codes above to fill this up
      fs.readFilePromise = function(arg) {};
      var timeoutPromise;


      Promise.all([timeoutPromise, fs.readFilePromise('exercise/file.txt')]).then(function() {
        // Create 3 simple promises and make this test pass
        // Clue: make at least one promise be broken </3
        var p1;
        var p2;
        var p3;
        Promise.all([p1, p2, p3]).then(function(bonusYakult) {
          // bonusYakult if you did not reject 3 promises above and make this test pass
          // you should make 
        }).catch(function(reason) {
        // do not modify below this line
          done()
        });
      });
    });
});
