$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      //stores the value from the input form in an object
      var todo = {item: item.val()};

      //make an ajax POST request to the server
      $.ajax({
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  //triggers the DELETE request
  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
