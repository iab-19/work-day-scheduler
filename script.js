// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour1 = $('#hour-1');
var hour2 = $('#hour-2');
var hour3 = $('#hour-3');
var hour4 = $('#hour-4');
var hour5 = $('#hour-5');

var textbox9 = $('#textbox9');
var textbox10 = $('#textbox10');
var textbox11 = $('#textbox11');
var textbox12 = $('#textbox12');
var textbox1 = $('#textbox1');
var textbox2 = $('#textbox2');
var textbox3 = $('#textbox3');
var textbox4 = $('#textbox4');
var textbox5 = $('#textbox5');

var save9 = $('#save9');
var save10 = $('#save10');
var save11 = $('#save11');
var save12 = $('#save12');
var save1 = $('#save1');
var save2 = $('#save2');
var save3 = $('#save3');
var save4 = $('#save4');
var save5 = $('#save5');



function changeColor(button) {
  button.addClass('blueee');
}


// Display date at the top of the webpage and refresh every second to update time(seconds)
function displayDate() {
  var currentDate = dayjs().format('dddd, D MMMM YYYY hh:mm:ss a');
  $('#currentDay').text(currentDate);
}

displayDate();
setInterval(displayDate, 1000);


// Function that sets the timbeblocks to past, present, or future
function setColor(hour, idName) {
  if (dayjs().hour(hour).isSame(dayjs(), ('hour'))) {
    // Adds class 'present' to id 'idName' if the current time is the same as the 'hour' time
    idName.addClass('present');
  } else if (dayjs().hour(hour).isBefore(dayjs(), ('hour'))) {
    // Add class 'past' to id 'idName' if the current time is before the 'hour' time
    idName.addClass('past');
  } else {
    // adds class 'future' if current time is neither in the past or the present
    idName.addClass('future');
  }

}

setColor(9, hour9);
setColor(10, hour10);
setColor(11, hour11);
setColor(12, hour12);
setColor(13, hour1);
setColor(14, hour2);
setColor(15, hour3);
setColor(16, hour4);
setColor(17, hour5);

function saveToSTorage(hourId, saveButton) {
  var hourValue = $(saveButton).siblings('.description').val();
  localStorage.setItem(hourId, hourValue);
  console.log('Button is working');
  console.log(hourValue);
}

save9.on('click', saveToSTorage(hour9.attr('id'), this));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
