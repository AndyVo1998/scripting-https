var https = require('https');

function getHTML (options, callback) {
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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML();