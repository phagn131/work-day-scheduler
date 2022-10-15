var $ans1a = $("#currentDay");

var currentDay = moment();

document.getElementById("currentDay").innerHTML = currentDay;
$ans1a.text(currentDay.format("dddd, MMMM Do"));


