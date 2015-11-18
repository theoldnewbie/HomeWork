
$(document).ready(function() {
  $(document).on( "submit", "#form", function(e) {
    e.preventDefault();
    var input = $('.input').val();
    if(input != ""){
      $('ul').append('<li>' + input + '</li>' );
      $('.input').val("");
    } else {
      alert("Воу воу, слова вводи давай!");
    }
  
    
  });

  $(document).on('click', '#lol', function(e){
  	e.preventDefault();
  	$('#send').slideToggle('slow');
  	$('#form').fadeTo('slow');
  })
});

