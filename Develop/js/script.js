// I need to add today date to the header
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm a"); 
var currentDayEL = $("#currentDay");
    currentDayEL.text(currentDay);

//assign save button to click listener  and save
 $("#btn8").on("click", function (){
     var text8 = $(".description").val();

     localStorage.setItem("hour8", text8);
 });

 $("#btn9").on("click", function (){
    var text9 = $(".description").val();

    localStorage.setItem("hour9", text9);
});

 
//load any saved data to local storage

var desc8 = localStorage.getItem("hour8");
$("#desc8").val(desc8);

var desc9 = localStorage.getItem("hour9");
$("#desc9").val(desc9);



//get current number of hours - form moment.js



//create a loop over the block of time




//check time, if we are  past the time, during the time, and in the future, use class created in CSS .past .present .future





