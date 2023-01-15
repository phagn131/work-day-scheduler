//creates element for day using JQuery selector, modify the element and append it to the page

var $today = $("#currentDay");
var currentDay = moment().format("dddd, MMMM Do");

document.getElementById("currentDay").innerHTML = currentDay;
$today.text(moment().format("dddd, MMMM Do"));
function update() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var hourId = parseInt($(this).attr("id").split("-")[1]);
    if (hourId < currentHour) {
      $(this).addClass("past");
    } else if (hourId === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      console.log(currentHour);
      console.log(currentDay);
    }
  });
}
update();

$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
//Sets function for each hour to modify and append to local storage, if one is selected
$(document).ready(function () {

  if (localStorage["9"] !== null && localStorage["9"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);

  } else {
    ("");
  }

  if (localStorage["10"] !== null && localStorage["10"] !== undefined) {
    var tenAm = $("<p>" + localStorage["10"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
    $("#elevenAm").append(elevenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
    var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
    $("#twelvePm").append(twelvePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
    var onePm = $("<p>" + localStorage["1pm"] + "</p>");
    $("#onePm").append(onePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
    var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
    $("#twoPm").append(twoPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
    var threePm = $("<p>" + localStorage["3pm"] + "</p>");
    $("#threePm").append(threePm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
    var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
    $("#fourPm").append(fourPm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
    var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
    $("#fivePm").append(fivePm[0].innerText);
  } else {
    ("");

  }
  
});