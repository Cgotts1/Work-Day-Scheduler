var displayCurrentTime = document.querySelector('#currentDay')
var hourlySchedule = document.querySelector('.container')
var time = moment()



setInterval(function (){

var time = moment().format("dddd MMM Do, YYYY")
displayCurrentTime.textContent = time



}, 1000);


// .format('YYYY-MM-DD [at] hh:mm:ss a')




// setInterval(function (){

//     var time = moment().format('YYYY MM Do')
//     hourlySchedule.textContent = time
    
    
                                                          // this worked because it wasnt jquery selected like in the example video
//     }, 1000);