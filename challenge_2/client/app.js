$(document).ready(function() {

  const postData = function() {
    $('#databutton').on('click', (event) => {
      event.preventDefault();
      var input = $('#data').val();

      if (input) {
        $.ajax({
          url: 'http://127.0.0.1:3001',
          method: 'POST',
          contentType: 'application/json',
          data: input,
          success: function(data) {
            data = JSON.parse(data);
            console.log('this is the data ', data, 'this is the data type ', typeof data);
            $('#csv-data').append(data);
          },
          error: function(err) {
            console.log(err);
          }
        })
      } else {
        alert('You have entered no text! Please input a javascript object');
      }
    })
  }

  postData();

});
    