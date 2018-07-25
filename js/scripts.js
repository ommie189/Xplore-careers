$(document).ready(function() {
  $('a#A1').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = '<li>' + 'pharmacy' + '</li>'
    $('#list').append(list);
  })

  $('a#A2').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = '<li>' + 'Medicine and Surgery' + '</li>'
    var list = '<li>' + 'Nursing' + '</li>'
    var list = '<li>' + 'Dental Surgery' + '</li>'
    $('#list').append(list);
  })
  $('a#A3').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = '<li>' + 'Veterinary Medicine' + '</li>'
    $('#list').append(list);
  })
  $('a#A4').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = '<li>' + 'Physics' + '</li>'
    $('#list').append(list);
  })
  $('a#A5').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = '<li>' + 'Biology' + '</li>'
    $('#list').append(list);
  })
  $('a#A6').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = '<li>' + 'Micro-biology' + '</li>'
    $('#list').append(list);
  })

  $('a#B1').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list = '<li>' + 'Pharmacy' + '</li>'
    var list = '<li>' + 'Biomedical Science' + '</li>'
    var list = '<li>' + 'Biochemistry' + '</li>'
    $('#list').append(list);
  })
  $('a#B2').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list = '<li>' + 'Dental Surgery' + '</li>'
    var list = '<li>' + 'Pharmacy' + '</li>'
    var list = '<li>' + 'Veterinary Medicine' + '</li>'
    var list = '<li>' + 'Medicine and Surgery' + '</li>'
    var list = '<li>' + 'Nursing' + '</li>'
    $('#list').append(list);
  })
  $('a#B3').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list = '<li>' + 'Biology' + '</li>'
    var list = '<li>' + 'Biochemistry' + '</li>'
    var list = '<li>' + 'Micro-biology' + '</li>'
    var list = '<li>' + 'Biotechnology' + '</li>'
    var list = '<li>' + 'Biomedical Science' + '</li>'

    $('#list').append(list);
  })
  $('a#B4').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list = '<li>' + 'Physics' + '</li>'
    var list = '<li>' + 'Biotechnology' + '</li>'
    $('#list').append(list);
  })
  $('a#C1').click(function() {
    $('#Q4').show();
    $('#Q3').hide();
    var list = '<li>' + 'Physics' + '</li>'
    $('#list').append(list);
  })
  $('a#C2').click(function() {
    $('#Q4').show();
    $('#Q3').hide();

    var list = '<li>' + 'Biology' + '</li>'
    var list = '<li>' + 'Micro-biology' + '</li>'
    var list = '<li>' + 'Physics' + '</li>'
    var list = '<li>' + 'Biotechnology' + '</li>'
    var list = '<li>' + 'Dentistry' + '</li>'
    var list = '<li>' + 'Veterinary Medicine' + '</li>'
    var list = '<li>' + 'Medicine and Surgery' + '</li>'
    var list = '<li>' + 'Nursing' + '</li>'
    var list = '<li>' + 'Biomedical Science' + '</li>'
    $('#list').append(list);
  })
  $('a#C3').click(function() {
    $('#Q4').show();
    $('#Q3').hide();
    var list = '<li>' + 'Pharmacy' + '</li>'
    var list = '<li>' + 'Biochemistry' + '</li>'
    $('#list').append(list);
  })

  $('a#D1').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
     $('#list').append(list);
  })


  $('a#D2').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list = '<li>' + 'Physics' + '</li>'
    $('#list').append(list);
  })

  $('a#D3').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list = '<li>' + 'Dentistry' + '</li>'
    $('#list').append(list);
  })
  $('a#D4').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list = '<li>' + 'Veterinary Medicine' + '</li>'
    var list = '<li>' + 'Medicine and Surgery' + '</li>'
    var list = '<li>' + 'Nursing' + '</li>'
    var list = '<li>' + 'Biomedical Science' + '</li>'
    $('#list').append(list);
  })
  $('a#D5').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list = '<li>' + 'Pharmacy' + '</li>'
    var list = '<li>' + 'Biochemistry' + '</li>'
    var list = '<li>' + 'Medical Laboratory' + '</li>'
    $('#list').append(list);
  })
  $('a#E1').click(function() {
    $('#Q6').show();
    $('#Q5').hide();
    var list = '<li>' + '' + '</li>'
    var list = '<li>' + '' + '</li>'
    var list = '<li>' + 'Dental Surgery' + '</li>'
    var list = '<li>' + 'Pharmacy' + '</li>'
    var list = '<li>' + 'Veterinary Medicine' + '</li>'
    var list = '<li>' + 'Medicine and Surgery' + '</li>'
    var list = '<li>' + 'Nursing' + '</li>'
    var list = '<li>' + 'Biomedical Science' + '</li>'
    var list = '<li>' + 'Medical Laboratory' + '</li>'


    $('#list').append(list);
  })
  $('a#E2').click(function() {
    $('#Q6').show();
    $('#Q5').hide();
    var list = '<li>' + 'Biology' + '</li>'
    var list = '<li>' + 'Biochemistry' + '</li>'
    var list = '<li>' + 'Micro-biology' + '</li>'
    var list = '<li>' + 'Physics' + '</li>'
    var list = '<li>' + 'Biotechnology' + '</li>'
    $('#list').append(list);
  })


})
