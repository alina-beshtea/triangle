$(document).ready(function() {
  $("form#tracker").submit(function(event) {
    event.preventDefault();
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());
    console.log("sideA", sideA)
    console.log("sideB", sideB)
    console.log("sideC", sideC)
    triangle(sideA, sideB, sideC);

  });
});



function triangle(sideA, sideB, sideC){
  console.log("checK")
  console.log("sideA", sideA)
  console.log("sideB", sideB)
  console.log("sideC", sideC)

// var sideA = 0
// var sideB = 0
// var sideC = 0



  if (sideA === sideB && sideB ===sideC) {
    $("#equilateral").show();
  }
  else if (sideA===sideB) {
    $("#isosceles").show();
  }
  else if (sideA===sideC) {
    ("#isosceles").show();
  }
  else if (sideC===sideB) {
    ("#isosceles").show();
  }
  else {("#notTriangle").show();
  }
  // return
