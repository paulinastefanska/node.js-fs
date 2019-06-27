var fs = require('fs');

//show image info
fs.stat('./dog.jpeg', function(err, stats) {
    console.log(stats);
});