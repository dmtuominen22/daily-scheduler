// I need to add today date to the header

var currentDay = moment().format("dddd, MMMM Do YYYY"); 
var currentDayEL = $("#currentDay");
    currentDayEL.text(currentDay);

//assign save button to click listener 

$(document).click(saveBtn);

// localStorage.setItem('todolist',(list));

// var hour8Store =  $("#hour8 .description").text;
// localStorage.setItem("hour8", hour8Store);

localStorage.content = $('#hour8').html('description');

//set items to local storage





//load any saved data to local storage




//get current number of hours - form moment.js



//create a loop over the block of time




//check time, if we are  past the time, during the time, and in the future, use class created in CSS .past .present .future





