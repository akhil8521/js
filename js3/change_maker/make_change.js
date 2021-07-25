/*
Javascript Assignment 3
Name: Akhil Jahagirdar 
Student ID: 8742662
Description: An application that tells how many quarters, dimes,
nickels, and pennies are needed to make change for any amount of change from 0
through 99 cents.
 */


var $ = function (id) {
  return document.getElementById(id);
};
// validating the amount should be between 0-99
function processEntries() {
  var cent = $("cents").value;
  // calculate changes
  if (cent >= 0 && cent <= 99) {
    makeChange(cent);
  } else {
    alert("value should be between 0 and 99");
    $("quarters").value = "";
    $("dimes").value = "";
    $("nickels").value = "";
    $("pennies").value = "";
    $("cents").focus();
    $("cents").select();
  }
}
// Making changes for the specified amount given.
function makeChange(cent) {
  var quarters = parseInt(cent / 25);
  cent = cent % 25;
  var dimes = parseInt(cent / 10);
  cent = cent % 10;
  var nickels = parseInt(cent / 5);
  cent = cent % 5;
  var pennies = parseInt(cent / 1);
  $("quarters").value = quarters;
  $("dimes").value = dimes;
  $("nickels").value = nickels;
  $("pennies").value = pennies;
  $("cents").focus();
}

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("cents").focus();
};
