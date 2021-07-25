/*
Javascript Assignment 4
Name: Akhil Jahagirdar 
Student ID: 8742662
Description: An App that add nodes to the DOM to display the Results and the Scores
*/

var names = ["Ben", "Joel", "Judy", "Anne"];

var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

// add name and score to array.
function addScore() {

    var name = $("name").value;

    var score = $("score").value;
// validating the name and score
    if (name == "" || score < 0 || score > 100 || isNaN(score)) {
        alert("You must enter a name and a valid score");
        $("name").focus();
        $("name").select();
    } else {

        names.push(name);

        scores.push(score);
    }

}
// Display average and highscore.
function displayResults() {

    var avg = 0.0,

        highest = 0;

    for (var i = 0; i < scores.length; i++) {

        avg += parseFloat(scores[i]);

        if (scores[highest] < scores[i])

            highest = i;

    }

    avg = avg / scores.length;

    $("results").innerHTML = "Average score = " + avg + "<br />";

    $("results").innerHTML += "High Score = " + names[highest] + " with a score of " + scores[highest];

}
// Display name and score array.
function displayScores() {

    var str = "<table>";

    str += "<tr align='left'><th>Name</th><th>Score</th></tr>";

    for (var i = 0; i < scores.length; i++) {

        str += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";

    }

    str += "</table>";

    $("scores_table").innerHTML = str;

}

window.onload = function () {

    $("add").onclick = addScore;

    $("display_results").onclick = displayResults;

    $("display_scores").onclick = displayScores;

};