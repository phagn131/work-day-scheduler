//creates element for day using JQuery selector, modify the element and append it to the page

var $today = $("#currentDay");
var currentDay = moment();
document.getElementById("currentDay").innerHTML = currentDay;
$today.text(currentDay.format("dddd, MMMM Do"));
//set variable for hour block using moment.JS
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

//sets function to modify hour block, and sets parameters for what class to call 
$.each(timeBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});
//saves calendar items with function using JQuery selector on button, click event and sets data
//and modifies and appends the items to local storage
$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
//Sets function for each hour to modify and append to local storage, if one is selected
$(document).ready(function () {
  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);
  } else {
    ("");
  }
});
