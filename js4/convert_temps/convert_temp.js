"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var toC = function () {
  $("degree_label_1").innerHTML = "Enter F degrees:";
  $("degree_label_2").innerHTML = "Degrees Celsius:";
  cTB();
};

var toF = function () {
  $("degree_label_1").innerHTML = "Enter C degrees:";
  $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
  cTB();
};

var cTB = function () {
  $("degrees_entered").value = "";
  $("degrees_computed").value = "";
  $("degrees_entered").focus();
};

var cT = function () {
  var degrees = parseFloat($("degrees_entered").value);
  var degresStr = $("degrees_entered").value;

  if (isNaN(degresStr)) {
    alert("You must enter a valid number for degrees.");
    $("degrees_entered").focus();
    $("degrees_entered").select();
  } else {
    if ($("to_celsius").checked) {
      var celsius = (degrees - 32) * (5 / 9);     
      $("degrees_computed").value = celsius.toFixed(0);
    } else {
      var fahrenheit = (9 / 5) * degrees + 32;  
      $("degrees_computed").value = fahrenheit.toFixed(0);
    }
  }
};

window.onload = function () {
  $("convert").onclick = convertTemp;
  $("to_celsius").onclick = toC;
  $("to_fahrenheit").onclick = toF;
  $("degrees_entered").focus();
};
