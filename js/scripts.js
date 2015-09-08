var factorial = function(num) {
  var facArr = [];
  var i = null;
  for ( i = num; i > 0; i-- ) {
    console.log(i);
    facArr.push(i);
  };
  var factor = 1;

  for (i=0; i < facArr.length; i++){
    factor = factor * facArr[i];
  };

  return(factor);
};

$(document).ready(function(){
  $('form#factorial').submit(function(event) {
    var facNum = parseInt($('input#number').val());
    var facResult = factorial(facNum);

    $('#facResult').text(facResult);
    event.preventDefault();
  });
});


// $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not").show();
//     } else {
//       $(".not").hide()
//     }
//
//     $("#result").show();
//     event.preventDefault();
//
//   });
