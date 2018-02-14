const express = require('express');
const bodyParser = require('body-parser');
const requestHandler = require('./requestHandler.js');

const app = express();
module.exports.app = app;
app.set('port', 3001);

app.post('/', bodyParser.json());
app.use(express.static('client'));

app.post('/', requestHandler);

app.listen(app.get('port'), () => {
  console.log('Listening to port:', app.get('port'));
});
