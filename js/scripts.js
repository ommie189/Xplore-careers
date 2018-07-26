$(document).ready(function() {

  $('button#B1').click(function() {
    $('#H1').hide();
    $('#Q1').show();
  })

  var filteredListArray = [];
  var listArray =[];
  $('a#A1').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['Pharmacy']
    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        return true
      } else {
        listArray.push(list[i]);
      }
    }

  })

  $('a#A2').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list2 = ['Medicine and Surgery', 'Nursing', 'Dental Surgery'];
    for (var i = 0; i < list2.length; i++) {
      if (listArray.includes(list2[i])) {
        true;
      } else {
        listArray.push(list2[i]);

      }
    }
  })
  $('a#A3').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list3 = ['Veterinary Medicine'];

    for (var i = 0; i < list3.length; i++) {
      if (listArray.includes(list3[i])) {
        true;
      } else {
        listArray.push(list3[i]);

      }
    }

  })
  $('a#A4').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list4 = ['Physics']

    for (var i = 0; i < list4.length; i++) {
      if (listArray.includes(list4[i])) {
        true;
      } else {
        listArray.push(list4[i]);

      }
    }
  })
  $('a#A5').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list5 = ['Biology']

    for (var i = 0; i < list5.length; i++) {
      if (listArray.includes(list5[i])) {
        true;
      } else {
        listArray.push(list5[i]);

      }
    }
  })
  $('a#A6').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list6 = ['Micro-biology']

    for (var i = 0; i < list6.length; i++) {
      if (listArray.includes(list6[i])) {
        true;
      } else {
        listArray.push(list6[i]);

      }
    }
  })

  $('a#B1').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    // var listarray = [];
    var list7 = ['Pharmacy', 'Biomedical Science', 'Biochemistry']

    for (var i = 0; i < list7.length; i++) {
      if (listArray.includes(list7[i])) {
        true;
      } else {
        listArray.push(list7[i]);
      }
    }
  })



  $('a#B2').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list8 = ['Dental Surgery', 'Pharmacy', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing']

    for (var i = 0; i < list8.length; i++) {
      if (listArray.includes(list8[i])) {
        true;
      } else {
        listArray.push(list8[i]);

      }
    }
  })
  $('a#B3').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list9 = ['Biology', 'Biochemistry', 'Micro-biology', 'Biotechnology', 'Biomedical Science']
    for (var i = 0; i < list9.length; i++) {
      if (listArray.includes(list9[i])) {
        true;
      } else {
        listArray.push(list9[i]);

      }
    }
  })

  $('a#B4').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var list10 = ['Physics', 'Biotechnology']
    for (var i = 0; i < list10.length; i++) {
      if (listArray.includes(list10[i])) {
        true;
      } else {
        listArray.push(list10[i]);

      }
    }
  })
  $('a#C1').click(function() {
    $('#Q4').show();
    $('#Q3').hide();
    var list11 = ['Physics']
    for (var i = 0; i < list11.length; i++) {
      if (listArray.includes(list11[i])) {
        true;
      } else {
        listArray.push(list11[i]);
      }
    }
  })
  $('a#C2').click(function() {
    $('#Q4').show();
    $('#Q3').hide();
    var list12 = ['Micro-biology', 'Physics', 'Biotechnology', 'Dentistry', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science']
    for (var i = 0; i < list12.length; i++) {
      if (listArray.includes(list12[i])) {
        true;
      } else {
        listArray.push(list12[i]);

      }
    }
  })
  $('a#C3').click(function() {
    $('#Q4').show();
    $('#Q3').hide();
    var list13 = ['Pharmacy', 'Biochemistry']
    for (var i = 0; i < list13.length; i++) {
      if (listArray.includes(list13[i])) {
        true;
      } else {
        listArray.push(list13[i]);

      }
    }
  })

  $('a#D1').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list14 = ['Biotechnology', 'Biomedical Science']
    for (var i = 0; i < list14.length; i++) {
      if (listArray.includes(list14[i])) {
        true;
      } else {
        listArray.push(list14[i]);
      }
    }

  })


  $('a#D2').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list15 = ['Physics']
    for (var i = 0; i < list15.length; i++) {
      if (listArray.includes(list15[i])) {
        true;
      } else {
        listArray.push(list15[i]);

      }
    }
  })

  $('a#D3').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list16 = ['Dentistry']
    for (var i = 0; i < list16.length; i++) {
      if (listArray.includes(list16[i])) {
        true;
      } else {
        listArray.push(list16[i]);

      }
    }
  })
  $('a#D4').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list17 = ['Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science']
    for (var i = 0; i < list17.length; i++) {
      if (listArray.includes(list17[i])) {
        true;
      } else {
        listArray.push(list17[i]);

      }
    }
  })
  $('a#D5').click(function() {
    $('#Q5').show();
    $('#Q4').hide();
    var list18 = ['Pharmacy', 'Biochemistry', 'Medical Laboratory']
    for (var i = 0; i < list18.length; i++) {
      if (listArray.includes(list18[i])) {
        true;
      } else {
        listArray.push(list18[i]);

      }
    }
  })
  $('a#E1').click(function() {
    $('#Q6').show();
    $('#Q5').hide();
    var list19 = ['Dental Surgery', 'Pharmacy', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science', 'Medical Laboratory'];
    var list20 = ['Biology', 'Biochemistry', 'Micro-biology', 'Physics', 'Biotechnology']
    for (var i = 0; i < list19.length; i++) {
      if (listArray.includes(list19[i])) {
        true;
      } else {
        listArray.push(list19[i]);
      }
    }


    var filteredListArray = listArray.filter(item => !list20.includes(item))
    console.log(filteredListArray);
    filteredListArray.forEach(function(element) {
      $('#list').append('<li>' + element + '</li>')

    })
  });


$('a#E2').click(function() {
$('#Q6').show();
$('#Q5').hide();
var list19 = ['Dentistry', 'Pharmacy', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science', 'Medical Laboratory'];
var list20 = ['Biology', 'Biochemistry', 'Micro-biology', 'Physics', 'Biotechnology']
for (var i = 0; i < list20.length; i++) {
  if (listArray.includes(list20[i])) {
    true;
  } else {
    listArray.push(list20[i]);

  }
}

    var filteredListArray = listArray.filter(item => !list19.includes(item))
    console.log(filteredListArray);
filteredListArray.forEach(function(element) {
  $('#list').append('<li>' + element + '</li>')

})
})

});
