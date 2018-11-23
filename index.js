// load required modules
const express = require('express');
const routes = require('./routes/index.js');
let path = require('path');

// start app and set port
let app = express();
app.set('port', (5900));

// set view engine for server generated pages
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// set routes
routes(app);

// listen for call to app
app.listen(app.get('port'), function() {
  console.log("listening on port", app.get('port'));
});