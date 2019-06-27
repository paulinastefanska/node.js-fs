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


//fs.readdir and  fs.writeFile exercise
var fs = require('fs');
var folder = "../node.js-fs/";

fs.readdir(folder, function(err, files) { //read catalog and save content as array in files
  if (err) { //if error write in console
    console.log(err);
  }; 
  files.forEach(function(name) { //go thru all array contents and show it in console
    console.log(name);
  });
  var files = files;
  var convertedFiles = files.toString(); //array convert use .toString
  var newLine = convertedFiles.replace(/,/g, ", \r\n"); //replace ',' to global ','
  fs.writeFile("dirContent.txt", newLine, save); //save download data to file
});

function save(err) { //function showing message after successfull save
  if (err) throw err;
  console.log("Successfully saved !"); //message
}

function newLine(err, name) {
  console.log(name);
}