var https = require('https');

function getAndPrintHTML (options) {
    https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      console.log(data.concat("\n"));
    });

    response.on('end', function(data) {
      var outputData = "";
      console.log(outputData += data);
  });

  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML();