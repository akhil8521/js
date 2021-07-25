/*
Javascript Assignment 4
Name: Akhil Jahagirdar 
Student ID: 8742662
Description: An App that uses radio buttons to determine whether the
conversion is from Fahrenheit to Celsius or vice versa.
 */
"use strict";
var $ = function (id) {
  return document.getElementById(id);
};
// changing labels to Celcius.
var toCelsius = function () {
  $("degree_label_1").innerHTML = "Enter F degrees:";
  $("degree_label_2").innerHTML = "Degrees Celsius:";
  clearTextBoxes();
};
// changing labels to Fahrenheit.
var toFahrenheit = function () {
  $("degree_label_1").innerHTML = "Enter C degrees:";
  $("degree_label_2").innerHTML = "Degrees Fahrenheit:";
  clearTextBoxes();
};
// clear the input fields.
var clearTextBoxes = function () {
  $("degrees_entered").value = "";
  $("degrees_computed").value = "";
  $("degrees_entered").focus();
};

var convertTemp = function () {
  var degrees = parseFloat($("degrees_entered").value);
  var degresStr = $("degrees_entered").value;
  // validating the given temperature.
  if (isNaN(degresStr) || degresStr < -100 || degresStr > 212) {
    alert("You must enter a valid number between -100 to 212 for degrees.");
    $("degrees_entered").focus();
    $("degrees_entered").select();
  } else {
    //converting celcius to farenheit
    if ($("to_celsius").checked) {
      var celsius = (degrees - 32) * (5 / 9);
      $("degrees_computed").value = celsius.toFixed(0);
    } //converting farenheit to celcius
    else {
      var fahrenheit = (9 / 5) * degrees + 32;
      $("degrees_computed").value = fahrenheit.toFixed(0);
    }
  }
};

window.onload = function () {
  $("convert").onclick = convertTemp;
  $("to_celsius").onclick = toCelsius;
  $("to_fahrenheit").onclick = toFahrenheit;
  $("degrees_entered").focus();
};
