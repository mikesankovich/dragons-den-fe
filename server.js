const express = require('express');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(path.join(__dirname, '/dist/dnd-api')));
// Start the app by listening on the default
// Heroku port

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/dist/dnd-api/index.html'));
});

app.listen(process.env.PORT || 8080);
