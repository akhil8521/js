"use strict";
var $ = function(id) { return document.getElementById(id); };

var displayCurrentTime = function() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var t = setTimeout(function() {
displayCurrentTime()
}, 500);
   var ampm = "AM";
   if(h > 12) {
       h = h - 12;
       ampm = "PM";
   }
   document.getElementById("hours").innerHTML = padSingleDigit(h);
       document.getElementById("minutes").innerHTML = padSingleDigit(m);
           document.getElementById("seconds").innerHTML = padSingleDigit(s);
           document.getElementById("ampm").innerHTML = ampm;
  
};

var padSingleDigit = function(num) {
return (num < 10) ? "0" + num : num;
};

window.onload = function() {
// set initial clock display and then set interval timer to display
// new time every second. Don't store timer object because it
// won't be needed - clock will just run.
   displayCurrentTime();
};

