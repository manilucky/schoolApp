const express = require("express");
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var datalist = require('./server/routes/datalist');
var signupdata = require('./server/routes/signupdata');


// Get our API routes
const apilist = require('./server/routes/apilist');

const app = express();

//app.use('/datamodel',datalist);
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/bootstrap',express.static(path.join(__dirname,'./node_modules/bootstrap/dist/')));

// Set our api routes
app.use('/apilist', apilist);
app.use('/Course',datalist);
app.use('/signupdata',signupdata);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
