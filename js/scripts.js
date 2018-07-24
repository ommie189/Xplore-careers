$(document).ready(function(){
  $('img#indoor').click(function(){
    $('.workspace').hide();
    $('#factory-office').show();
  });

  $('img#outdoor').click(function(){
    $('.workspace').hide();
    $('.fieldwork').show();
  });

  $('img#field1').click(function(){
    $('.workspace').hide();
    $('.fieldwork').hide();
    $('#ans1').show();
  });

  $('img#field2').click(function(){
    $('.workspace').hide();
    $('.fieldwork').hide();
    $('#ans2').show();
  });

  $('img#fact').click(function(){
    $('.workspace').hide();
    $('#factory-office').hide();
    $('#ans3').show();
  });

  $('img#office').click(function(){
    $('.workspace').hide();
    $('#factory-office').hide();
    $('#ans4').show();
  });

});
