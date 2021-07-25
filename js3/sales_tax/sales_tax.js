/*
Javascript Assignment 3
Name: Akhil Jahagirdar 
Student ID: 8742662
Description: An application that calculates the sales tax and
invoice total after the user enters the subtotal and tax rate.
 */
var $ = function (id) {
  return document.getElementById(id);
};
// validating the given amount.
var processEntries = function () { 
  var subTotal = parseFloat($("subtotal").value);  
  var taxRate = parseFloat($("tax_rate").value);   
  if (
    subTotal < 0 ||
    subTotal >= 10000 ||       
    taxRate < 0 ||
    taxRate >= 12 
  ) {
    alert("Subtotal must be > 0 and < 10000" + "\n" + "Rate must be > 0 and < 12");
    $("subtotal").focus();
    // Calculate tax.
  } else {   
    var salesTax = subTotal * (taxRate / 100);
    var total = subTotal + salesTax;    
    $("sales_tax").value = salesTax.toFixed(2);
    $("total").value = total.toFixed(2);
    $("subtotal").focus();
  }
};

var clearEntries = function () {
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";
  $("subtotal").focus();
};

var clearSubTotal = function () {
  $("subtotal").value = "";
  $("subtotal").focus();
};

var clearTaxRate = function () {
  $("tax_rate").value = "";
  $("tax_rate").focus();
};

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("clear").onclick = clearEntries;
  $("subtotal").onclick = clearSubTotal;
  $("tax_rate").onclick = clearTaxRate;
  $("subtotal").focus();
};
