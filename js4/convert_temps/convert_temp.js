"use strict";
var $ = function (id) { return document.getElementById(id); };


var clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function () {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};

/**

* convert temprature

* fahrenheit to celsius or celsius to fahrenheit

* @param e event object

*/

var convertTemp = function(e){

    var enteredVal = $("degrees_entered").value;

    if (isNaN(enteredVal)){

        alert("You must enter a valid number for degrees.");

        return;

    }

    if ($("to_celsius").checked){           // condition for F to C conversion

        var C = (enteredVal - 32) * 5 / 9;           // calculate celsius from fahrenheit

        $("degrees_computed").value = C;    // update text box

    }else if ($("to_fahrenheit").checked){  // condition for C to F conversion

        var F = (9 * enteredVal / 5) + 32;           // calculate fahrenheit from celsius

        $("degrees_computed").value = F;    // update text box

    }

}

/**

* change labled and conversion

* @param e

*/

var toCelsius = function (e) {

    $("degree_label_1").innerHTML = "Enter F degrees:";

    $("degree_label_2").innerHTML = "Degrees Celsius:";

    clearTextBoxes();

}

/**

* change labled and conversion

* @param e

*/

var toFahrenheit = function (e) {

    $("degree_label_1").innerHTML = "Enter C degrees:";

    $("degree_label_2").innerHTML = "Degrees Fahrenheit:";

    clearTextBoxes();

}

window.onload = function() {

    $("convert").onclick = convertTemp;

    $("to_celsius").onclick = toCelsius;

    $("to_fahrenheit").onclick = toFahrenheit;

    $("degrees_entered").focus();

};