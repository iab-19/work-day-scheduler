$(document).ready(function () {
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

  // Display date at the top of the webpage and refresh every second to update time(seconds)
  function displayDate() {
    var currentDate = dayjs().format('dddd, D MMMM YYYY hh:mm:ss a');
    $('#currentDay').text(currentDate);
  }

  displayDate();
  setInterval(displayDate, 1000);


  // Function that sets the timbeblocks to past, present, or future, changing the corresponding colors
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


  // Functions to save text to local storage when corresponing button is clicked
  function saveToSTorage(hourId, saveButton) {
    var hourValue = $(saveButton).siblings('.description').val();
    localStorage.setItem(hourId, hourValue);
    console.log('Button is working');
    console.log(hourValue);
  }


  save9.on('click', function() {
    saveToSTorage(hour9.attr('id'), $(this));
  });

  save10.on('click', function() {
    saveToSTorage(hour10.attr('id'), $(this));
  });

  save11.on('click', function() {
    saveToSTorage(hour11.attr('id'), $(this));
  });

  save12.on('click', function() {
    saveToSTorage(hour12.attr('id'), $(this));
  });
  save1.on('click', function() {
    saveToSTorage(hour1.attr('id'), $(this));
  });

  save2.on('click', function() {
    saveToSTorage(hour2.attr('id'), $(this));
  });

  save3.on('click', function() {
    saveToSTorage(hour3.attr('id'), $(this));
  });

  save4.on('click', function() {
    saveToSTorage(hour4.attr('id'), $(this));
  });

  save5.on('click', function() {
    saveToSTorage(hour5.attr('id'), $(this));
  });


  // Function to render the saved activities in the timeblocks
  function renderSaved(location, timeblock) {
    var saveData= localStorage.getItem(location);
    timeblock.val(saveData);
  }

  renderSaved(hour9.attr('id'), textbox9);
  renderSaved(hour10.attr('id'), textbox10);
  renderSaved(hour11.attr('id'), textbox11);
  renderSaved(hour12.attr('id'), textbox12);
  renderSaved(hour1.attr('id'), textbox1);
  renderSaved(hour2.attr('id'), textbox2);
  renderSaved(hour3.attr('id'), textbox3);
  renderSaved(hour4.attr('id'), textbox4);
  renderSaved(hour5.attr('id'), textbox5);
});
