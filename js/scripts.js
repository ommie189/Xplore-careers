$(document).ready(function(){
  $('button#kuiz').click(function(){
    $('#description').hide();
    $('#quest').show();
  })
  $('a#a1').click(function(){
    $('#q2').show();
    $('#q1').hide();
    var li='<li>'+'Business Management'+'</li>'
    $('#somo1').append(li);
  })
  $('a#a2').click(function(){
    $('#q2').show();
    $('#q1').hide();
    var li='<li>'+'Business Administration'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b1').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'Economics'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b2').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'Marketing'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b3').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'Cooparative Business'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b4').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'Human Resource Management'+'</li>'
    $('#somo1').append(li);
  })
  $('a#c1').click(function(){
    $('#q4').show();
    $('#q3').hide();

  })
  $('a#c2').click(function(){
    $('#q5').show();
    $('#q3').hide();
  })
  $('button#problem').click(function(){
    $('#somo').show();
    $('#q4').hide();
    var li='<li>'+'Commerce'+'</li>'
    $('#somo1').append(li);
  })
  $('button#manage').click(function(){
    $('#somo').show();
    $('#q4').hide();
    var li='<li>'+'Business Communication'+'</li>'
    $('#somo1').append(li);
  })
  $('button#math').click(function(){
    $('#q5').hide();
    var li='<li>'+'Business Communication'+'</li>'
    $('#somo1').append(li);
    $('#somo').show();
  })
  $('button#lingo').click(function(){
    $('#somo').show();
    $('#q5').hide();
    var li='<li>'+'Business Ethics'+'</li>'
    $('#somo1').append(li);
  })

})
