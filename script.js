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

// if (dayjs().hour(9).isSame(dayjs(), ('hour'))) {
//   console.log('The time is 9am');
//   hour9.addClass('present');
// } else if (dayjs().hour(0).isBefore(dayjs(), ('hour'))) {
//   console.log('The time is before 9 am');
//   hour9.addClass('past');
// } else {
//   console.log('The time is after 9 am');
//   hour9.addClass('future');
// }

// Function that sets the timbeblocks to past, present, or future
function setColor(hour, idName) {
  if (dayjs().hour(hour).isSame(dayjs(), ('hour'))) {
    console.log('The time is ' + hour + 'am');
    // Adds class 'present' to id 'idName' if the current time is the same as the 'hour' time
    idName.addClass('present');
  } else if (dayjs().hour(hour).isBefore(dayjs(), ('hour'))) {
    // Add class 'past' to id 'idName' if the current time is before the 'hour' time
    idName.addClass('past');
  } else {
    // adds class 'future' if
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

var currentDate = dayjs().format('dddd, hh:mm:ss a');
// Display date at the top of the webpage and refresh every second to update time(seconds)
function displayDate() {
  currentDate = dayjs().format('dddd, hh:mm:ss a');
  $('#currentDay').text(currentDate);
}

// console.log(dayjs().hour(9));
displayDate();
setInterval(displayDate, 1000);

var before = dayjs().isBefore(dayjs(), ('hour'));
var after = dayjs().isAfter(dayjs(), ('hour'));
var same = dayjs().isSame(dayjs(),('hour'));
console.log(before);
console.log(after);
console.log(same);

// hour9.addClass('past');
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
