var displayCurrentTime = document.querySelector('#currentDay')
var hourlySchedule = document.querySelector('.container')
var time = moment()

var nine = document.querySelector("#nine")
var ten =








setInterval(function (){

var time = moment().format("dddd MMM Do, YYYY")
displayCurrentTime.textContent = time             // this worked because it wasnt jquery selected like in the example video

}, 1000);



