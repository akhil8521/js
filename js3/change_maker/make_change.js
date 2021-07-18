var $ = function (id) {
  return document.getElementById(id);
};

function processEntries() {
  var cents = $("cents").value;
  if (cents >= 0 && cents <= 99) {
    makeChange(cents);
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

function makeChange(cents) {
  var quarters = parseInt(cents / 25);
  cents = cents % 25;
  var dimes = parseInt(cents / 10);
  cents = cents % 10;
  var nickels = parseInt(cents / 5);
  cents = cents % 5;
  var pennies = parseInt(cents / 1);
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
