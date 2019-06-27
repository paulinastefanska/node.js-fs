var fs = require('fs');
var StatMode = require('stat-mode');

//show img info - decoding result of the fs.stats
fs.stat('./dog.jpeg', function(err, stats) {
	var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

