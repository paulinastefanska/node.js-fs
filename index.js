/* simple exercise with fs

var fs = require('fs');
var StatMode = require('stat-mode');

//show img info - decoding result of the fs.stats
fs.stat('./dog.jpeg', function(err, stats) {
	var statMode = new StatMode(stats);
    console.log(statMode.toString());
});
*/

/* read/write file exercise

var fs = require('fs');
var colors = require('colors');

fs.readFile('./text.txt', 'utf-8', function(err, data) {
    console.log('Data before save!'.blue);
    console.log(data);
    fs.appendFile('./text.txt', '\n That`s how data looks after save!', function(err) {
        if (err) throw err;
        console.log('Saved!'.blue);
        fs.readFile('./text.txt', 'utf-8', function(err, data) {
            console.log('Data after save!'.blue)
            console.log(data);
        });
    });
});
*/
