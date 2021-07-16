"use strict";

var $ = function (id) { return document.getElementById(id); };

//global stop watch timer variable and elapsed time object

var stopwatchTimer;

var elapsedMinutes = 0;

var elapsedSeconds = 0;

var elapsedMilliseconds = 0;

var displayCurrentTime = function () {

    var now = new Date();

    var hours = now.getHours();

    var ampm = "AM"; // set default value



    // correct hours and AM/PM value for display

    if (hours > 12) { // convert from military time

        hours = hours - 12;

        ampm = "PM";

    } else { // adjust 12 noon and 12 midnight

        switch (hours) {

            case 12: // noon

                ampm = "PM";

                break;

            case 0: // midnight

                hours = 12;

                ampm = "AM";

        }

    }



    $("hours").firstChild.nodeValue = hours;

    $("minutes").firstChild.nodeValue = padSingleDigit(now.getMinutes());

    $("seconds").firstChild.nodeValue = padSingleDigit(now.getSeconds());

    $("ampm").firstChild.nodeValue = ampm;

};

var padSingleDigit = function (num) {

    if (num < 10) { return "0" + num; }

    else { return num; }

};

var tickStopwatch = function () {

    //console.log("Tick");

    // increment milliseconds by 10 milliseconds

    elapsedMilliseconds = elapsedMilliseconds + 10;

    //console.log(elapsedMilliseconds);

    // if milliseconds total 1000, increment seconds by one and reset milliseconds to zero

    if (elapsedMilliseconds == 1000) {

        elapsedMilliseconds = 0;

        elapsedSeconds = elapsedSeconds + 1;

    }

    // if seconds total 60, increment minutes by one and reset seconds to zero

    if (elapsedSeconds == 60) {

        elapsedSeconds = 0;

        elapsedMinutes = elapsedMinutes + 1;

    }

    //display new stopwatch time

    //console.log(elapsedMinutes, elapsedSeconds, elapsedMilliseconds);

    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;

    $("s_seconds").firstChild.nodeValue = elapsedSeconds;

    $("s_minutes").firstChild.nodeValue = elapsedMinutes;



};

// event handler functions

var startStopwatch = function (evt) {

    //console.log("Start");

    // prevent default action of link

    var eventHandler = function () {

        if (!evt) { evt = window.event }

        if (evt.preventDefault) {

            evt.preventDefault();

        }

        else {

            evt.returnValue = false;

        }

    };

    // do first tick of stop watch and then set interval timer to tick

    tickStopwatch;

    // stop watch every 10 milliseconds. Store timer object in stopwatchTimer

    stopwatchTimer = setInterval(tickStopwatch, 10);

    //console.log("before set interval");

    // variable so next two functions can stop timer.



};

var stopStopwatch = function (evt) {

    // prevent default action of link

    var eventHandler = function () {

        if (!evt) { evt = window.event }

        if (evt.preventDefault) {

            evt.preventDefault();

        }

        else {

            evt.returnValue = false;

        }

    };

    // stop timer

    clearInterval(stopwatchTimer);



};

var resetStopwatch = function (evt) {

    // prevent default action of link

    var eventHandler = function () {

        if (!evt) { evt = window.event }

        if (evt.preventDefault) {

            evt.preventDefault();

        }

        else {

            evt.returnValue = false;

        }

    };

    // stop timer

    clearInterval(stopwatchTimer);

    // reset elapsed variables and clear stopwatch display

    elapsedMilliseconds = 0;

    elapsedSeconds = 0;

    elapsedMinutes = 0;

    $("s_ms").firstChild.nodeValue = elapsedMilliseconds;

    $("s_seconds").firstChild.nodeValue = elapsedSeconds;

    $("s_minutes").firstChild.nodeValue = elapsedMinutes;



};

window.onload = function () {

    // set initial clock display and then set interval timer to display

    // new time every second. Don't store timer object because it

    // won't be needed - clock will just run.

    displayCurrentTime();

    setInterval(displayCurrentTime, 1000);



    // set up stopwatch event handlers

    $("start").onclick = startStopwatch;

    $("stop").onclick = stopStopwatch;

    $("reset").onclick = resetStopwatch;

};