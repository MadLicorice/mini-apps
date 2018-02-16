const express = require('express');
const parser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const mondo = require('./requestHandler.js')

const pathname = path.join(__dirname + './../client/dist')
const app = express();

app.set('port', 3003);

app.post('/', parser.json());
app.use(express.static(pathname));

app.post('/', (req, res) => {
  console.log(req.body);
  let bowler = new mondo.listen(req.body);
  bowler.save().then(() => {
    res.send('Received ')
  })
})

app.get('/scores', (req, res) => {
  console.log(req.body);
  mondo.another.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data)
    }
  })

})

app.listen(app.get('port'), ()=> {
  console.log('Listening on port:', app.get('port'));
})
