var $today = $("#currentDay");

var currentDay = moment();

document.getElementById("currentDay").innerHTML = currentDay;
$today.text(currentDay.format("dddd, MMMM Do"));


var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

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


$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});


