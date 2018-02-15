const express = require('express');
const parser = require('body-parser');
const path = require('path');
var pathname = path.join(__dirname + './../client/dist');

const app = express();

app.set('port', 3002);
app.post('/', parser.json());

app.use(express.static(pathname));

app.listen(app.get('port'), () => {
  console.log('Listening on port:', app.get('port'));
});
