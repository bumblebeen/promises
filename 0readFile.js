var fs = require('fs');
var text = '';
fs.readFile('file1.txt', "utf8", function(err, data) {
  if (err) throw err;
  text += data;
  fs.readFile('file2.txt', "utf8", function (err, data) {
    if (err) throw err;
    text += data;
    console.log(text);
  });
});
