$(document).ready(function(){

  $(".btn2").click(function(){
    $("#discipline").slideDown("slow");
  });

  $('button#kuiz').click(function(){
    $('#descript').hide();
    $('#quest').show();
  })
  $('a#a1').click(function(){
    $('#q2').show();
    $('#q1').hide();
    var li='<li>'+'<strong>'+'Business Management '+'</strong>'+'-Studies techniques and responsibilities involved in the supervision of employees.Management of projects and customer service functions are studied.'+'<a href="http://info.searchall.com/sarmg4.b/search/web?q=business+management+course">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('a#a2').click(function(){
    $('#q2').show();
    $('#q1').hide();
    var li='<li>'+'<strong>'+'Business Administration '+'</strong>'+'-This course creates the foundation for strong communication ability and introduces the dynamics of interpersonal and organizational communication.This is a foundation course for further work in organization and management.'+'<a href="http://info.searchall.com/sarmg2.b/search/web?q=business+administration+course">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b1').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'<strong>'+'Economics '+'</strong>'+'- introduction to the basic tools of micro- and macroeconomic analysis. Microeconomics deals with consumers, firms, markets and income distribution. Macroeconomics deals with national income, employment, inflation and money.'+'<a href="http://info.searchall.com/sarmg2.b/search/web?q=online+economics+courses">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b2').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'<strong>'+'Marketing '+'</strong>'+'-this course provides an in-depth understanding and analysis of promotional strategies and tactics necessary in the management of all marketing communications.'+'<a href="https://www.academiccourses.com/Courses/Marketing/">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b3').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'<strong>'+'Cooparative Management '+'</strong>'+'-this course focuses on the methods by which mainstream governance, accounting, personnel, and marketing practices can be adapted to fit the cooperative model.'+'<a href="https://www.topuniversities.com/courses/business-management-studies/management-guide">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('a#b4').click(function(){
    $('#q3').show();
    $('#q2').hide();
    var li='<li>'+'<strong>'+'Human Resource Management'+'</strong>'+'-this course focuses on the formal systems devised for the management of people within an organization.'+'<a href="https://study.com/human_resources_course.html">'+'more information'+'</a>'+'</li>'
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
    var li='<li>'+'<strong>'+'Commerce'+'</strong>'+'-this course is designed to develop your business acumen, financial literacy, and analytical skills. One will be prepared for a career in fields including accounting, financial management, banking and information systems.'+'<a href="https://en.wikipedia.org/wiki/Bachelor_of_Commerce">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('button#manage').click(function(){
    $('#somo').show();
    $('#q4').hide();
    var li='<li>'+'<strong>'+'Business Science'+'</strong>'+'-this course is designed to develop  the application of quantitative methods that are valuable in the business world to prepare for a variety of careers.'+'<a href="https://en.wikipedia.org/wiki/Bachelor_of_Business_Science">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })
  $('button#math').click(function(){
    $('#q5').hide();
    var li='<li>'+'<strong>'+'Business Science'+'</strong>'+'-this course is designed to develop  the application of quantitative methods that are valuable in the business world to prepare for a variety of careers.'+'<a href="https://en.wikipedia.org/wiki/Bachelor_of_Business_Science">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
    $('#somo').show();
  })
  $('button#lingo').click(function(){
    $('#somo').show();
    $('#q5').hide();
    var li='<li>'+'<strong>'+'Entrepreneurship and Small Business Management'+'</strong>'+'-this course provides students with necessary skills that can enable them to respond to the need for effective management of public and private enterprises.'+'<a href="https://study.com/articles/Bachelor_of_Science_BS_Small_Business_and_Entrepreneurship_Degree_Overview.html">'+'more information'+'</a>'+'</li>'
    $('#somo1').append(li);
  })

})
