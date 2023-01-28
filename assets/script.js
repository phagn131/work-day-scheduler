//creates element for day using JQuery selector, modify the element and append it to the page

var $today = $("#currentDay");
var currentDay = moment().format("dddd, MMMM Do");

document.getElementById("currentDay").innerHTML = currentDay;
$today.text(moment().format("dddd, MMMM Do"));
function update() {
  var currentHour = moment().hours();

  console.log(currentHour);
  $(".time-block").each(function () {
    var hourId = parseInt($(this).attr("id"));
    console.log(hourId);
    if (hourId < currentHour) {
      $(this).addClass("past");
    } else if (hourId === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      //console.log(currentHour);
      //console.log(currentDay);
    }
  });
}
update();

$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.children[1].value;
  console.log(event.target.parentElement.children[0].innerHTML);
  localStorage.setItem(event.target.parentElement.children[0].innerHTML, calendarItem);
});
//Sets function for each hour to modify and append to local storage, if one is selected
$(document).ready(function () {

  if (localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
    var nineAm = $("<p>" + localStorage["9am"] + "</p>");
    $("#nineAm").append(nineAm[0].innerText);

  } else {
    ("");
  }

  if (localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
    var tenAm = $("<p>" + localStorage["10am"] + "</p>");
    $("#tenAm").append(tenAm[0].innerText);
  } else {
    ("");
  }
  if (localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
    var elevenAm = $("<p>" + localStorage["11"] + "</p>");
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