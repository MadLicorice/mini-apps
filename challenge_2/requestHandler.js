const app = require('./server.js');

const requestHandler = function(req, res) {
  console.log(req.body);
  res.send(JSON.stringify(convertToCSV(req.body)));
}

const convertToCSV = (data) => {
  let result = [];
  let keys = Object.keys(data);
  let len = keys.length - 1;
  let temp = '';
  for (let i = 0; i < len; i += 1) {
    if (i + 1 === len) {
      temp += keys[i];
    } else {
      temp += (keys[i] + ',');
    }
  }
  result.push(temp);

  const innerFunc = (data, depth) => {
    let vals = Object.values(data);
    let len = keys.length - 1;
    let temp = '';
    for (let i = 0; i < len; i += 1) {
      if (i + 1 === len) {
        temp += vals[i];
      } else {
        temp += (vals[i] + ',');
      }
    }
    result.push(temp);
    if (data.children.length) {
      for (let j = 0; j < data.children.length; j += 1) {
        innerFunc(data.children[j], depth + 1);
      }
    }
  }
  innerFunc(data, null);
  return result.join('\n');
}

module.exports = requestHandler;