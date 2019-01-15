var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', function(err) {
          console.log("An error occured: " + err)
        })
        .on('response', function(response) {
          console.log("Response status code: " +
          response.statusMessage + "\n Content Type: " + response.headers['content-type']);
          console.log("Downloading image...")
        })
        .pipe(fs.createWriteStream('./future.jpg'))
        .on('finish', function() {
          console.log("Download complete");
        });


