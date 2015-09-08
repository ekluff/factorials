var factorial = function(num) {
  var facArr = [];
  var i = null;
  for ( i = num; i > 0; i-- ) {
    console.log(i);
    facArr.push(i);
  };

  var factor = 1;

  for (i=0; i < facArr.length; i++){
    factor *= facArr[i];
  };

  return factor;

};








$(document).ready(function(){

});
