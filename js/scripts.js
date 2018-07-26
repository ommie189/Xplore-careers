$(document).ready(function() {

$('button#B1').click(function(){
  $('#H1').hide();
  $('#Q1').show();
})

  var listArray = [];
  $('a#A1').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['pharmacy']
    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        return true
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>');
      }
      return listArray;
    }
    // for (var i = 0; i < listArray.length; i++) {
    //   return $('#list').append('<li>' + listArray[i] + '</li>');
    // }
  })

  $('a#A2').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['Medicine and Surgery', 'Nursing', 'Dental Surgery'];
    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        true;
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>')
      }
    }
    // $('#list').append('list');
  })
  $('a#A3').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['Veterinary Medicine'];

    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        true;
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>')
      }
    }

    // $('#list').append(list);
  })
  $('a#A4').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['Physics']

    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        true;
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>')
      }
    }
    // $('#list').append(list);
  })
  $('a#A5').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['Biology']

    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        true;
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>')
      }
    }
    // $('#list').append(list);
  })
  $('a#A6').click(function() {
    $('#Q2').show();
    $('#Q1').hide();
    var list = ['Micro-biology']

    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        true;
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>')
      }
    }
    // $('#list').append(list);
  })

  $('a#B1').click(function() {
    $('#Q3').show();
    $('#Q2').hide();
    var listarray = [];
    var list = ['Pharmacy', 'Biomedical Science', 'Biochemistry']

    for (var i = 0; i < list.length; i++) {
      if (listArray.includes(list[i])) {
        true;
      } else {
        listArray.push(list[i]);
        $('#list').append('<li>' + listArray[i] + '</li>')
      }
    }
    // $('#list').append(list);
  })


    // $('#list').append(list);

$('a#B2').click(function() {
  $('#Q3').show();
  $('#Q2').hide();
  var list = ['Dental Surgery', 'Pharmacy', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing']

  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#B3').click(function() {
  $('#Q3').show();
  $('#Q2').hide();
  var list = ['Biology', 'Biochemistry', 'Micro-biology', 'Biotechnology', 'Biomedical Science']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})

$('a#B4').click(function() {
  $('#Q3').show();
  $('#Q2').hide();
  var list = [, 'Physics', 'Biotechnology']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#C1').click(function() {
  $('#Q4').show();
  $('#Q3').hide();
  var list = ['Physics']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#C2').click(function() {
  $('#Q4').show();
  $('#Q3').hide();
  list = ['Micro-biology', 'Physics', 'Biotechnology', 'Dentistry', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#C3').click(function() {
  $('#Q4').show();
  $('#Q3').hide();
  var list = ['Pharmacy', 'Biochemistry']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})

$('a#D1').click(function() {
  $('#Q5').show();
  $('#Q4').hide();
  var list = ['Biotechnology', 'Biomedical science']
  // $('#list').append(list);
})


$('a#D2').click(function() {
  $('#Q5').show();
  $('#Q4').hide();
  var list = ['Physics']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})

$('a#D3').click(function() {
  $('#Q5').show();
  $('#Q4').hide();
  var list = ['Dentistry']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#D4').click(function() {
  $('#Q5').show();
  $('#Q4').hide();
  var list = ['Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#D5').click(function() {
  $('#Q5').show();
  $('#Q4').hide();
  var list = ['Pharmacy', 'Biochemistry', 'Medical Laboratory']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }
  // $('#list').append(list);
})
$('a#E1').click(function() {
  $('#Q6').show();
  $('#Q5').hide();
  var list = ['Dental Surgery', 'Pharmacy', 'Veterinary Medicine', 'Medicine and Surgery', 'Nursing', 'Biomedical Science', 'Medical Laboratory']
  for (var i = 0; i < list.length; i++) {
    if (listArray.includes(list[i])) {
      true;
    } else {
      listArray.push(list[i]);
      $('#list').append('<li>' + listArray[i] + '</li>')
    }
  }

  // $('#list').append(list);
})
$('a#E2').click(function() {
$('#Q6').show();
$('#Q5').hide();
var list = [, 'Biology', 'Biochemistry', 'Micro-biology', 'Physics', 'Biotechnology']
for (var i = 0; i < list.length; i++) {
  if (listArray.includes(list[i])) {
    true;
  } else {
    listArray.push(list[i]);
    $('#list').append('<li>' + listArray[i] + '</li>')
  }
}
// $('#list').append(list);
})
})
