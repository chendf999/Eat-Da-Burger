// add new burger
$('#btn-add').on('click', function(event){
  event.preventDefault();

  var input = $('#input-add').val();

  var newBurger = {
    burger_name: input,
    devoured: false
  }

  $.ajax('/new', {
    type: 'POST',
    data: newBurger
  }).then(function(){
    $('#input-add').val('');
    window.location.reload();
  });
});

// update status
$('.burger-devour').on('click', function(){
  var id = $(this).attr('index');
  var change = {
    devoured: true
  }

  $.ajax('/' + id, {
    type: 'PUT',
    data: change
  }).then(function(){
    window.location.reload();
  });
});

// delete a burger
$('.burger-delete').on('click', function(){
  var id = $(this).attr('index');

  $.ajax('/' + id, {
    type: 'DELETE'
  }).then(function(){
    window.location.reload();
  });
});
