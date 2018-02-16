import axios from 'axios';

export const sendRequest = (obj) => {
  axios.post('http://127.0.0.1:3003', obj)
  .then(res => {
    console.log('got it', res)
  })
  .catch(err => {
    console.log(err)
  });
}

export const getScores = () => {
  axios.get('http://127.0.0.1:3003/scores')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
}









//   let obj1 = {name: 'yunus', score: 49}
//   $.ajax({
//     method: 'POST',
//     url: 'http://127.0.0.1:3003',
//     data: JSON.stringify(obj1),
//     contentType: 'application/json',
//     success: (data => {
//       console.log('success: ', data)
//     }),
//     error: (err => {
//       console.log(err)
//     })
// })




