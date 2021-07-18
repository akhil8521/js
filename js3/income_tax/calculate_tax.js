"use strict";
var $ = function (id) {
    return document.getElementById(id);
};


var processEntry = function () {    
    var income = parseInt($("income").value);   

    if (income <= 0 ) {
        alert("Taxable income should be greater than 0 and a valid Number.");
        $("income").focus();
      } else {
        var tax = calculateTax(income);
        $("tax").value = tax;
        $("income").focus();        
      }

};

var calculateTax = function (income) {
    var tax;

    if(income > 0 && income <= 9275) {
        tax = income * (10/100);
    } else if(income > 9275 && income <= 37650) {
        tax = 927.50 + ((income - 9275) * (15/100));
    } else if(income > 37650 && income <= 91150) {
        tax = 5183.75 + ((income - 37650) * (25/100));
    } else if(income > 91150 && income <= 190150) {
        tax = 18558.75 + ((income - 91150) * (28/100));
    } else if(income > 190150 && income <= 413350) {
        tax = 46278.75 + ((income - 190150) * (33/100));
    } else if(income > 413350 && income <= 415050) {
        tax = 119934.75 + ((income - 413350) * (35/100));
    } 
    else {
        tax = 120529.75 + ((income - 415050) * (39.6/100));
    }
    tax = tax.toFixed(2);
    return tax;
};

window.onload = function () {
    $("calculate").onclick = processEntry;
    $("income").focus();
};

