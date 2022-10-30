var displayCurrentTime = document.querySelector('#currentDay')
var hourlySchedule = document.querySelector('.container')


var nine = document.querySelector("#nine")
var ten = document.querySelector("#ten")
var eleven = document.querySelector("#eleven")
var twelve = document.querySelector("#twelve")
var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var five = document.querySelector("#five")











































// const storageTextArea = document.querySelector("#textarea");
// const button = document.querySelector("saveBtn")


// const saveToLocalStorage = ()=>{
//     localStorage.setItem('textarea')
// }

// button.addEventListener("click", saveToLocalStorage);























































var currentHour = [[nine, '09'], [nine, '10'], [nine, '11'], [nine, '12'], [nine, '13'], [nine, '14'], [nine, '15'], [nine, '16'], [nine, '17']];



function pastPresentFuture(){
    var nine = "";
    
    }




setInterval(function (){

var time = moment().format("dddd MMM Do, YYYY")
displayCurrentTime.textContent = time             // this worked because it wasnt jquery selected like in the example video

}, 1000);





























// Local Storage

//Hour 9

const button = document.querySelector(".sb9");
const textarea = document.querySelector(".t9");
textarea.innerHTML = localStorage.getItem("value")
button.addEventListener("click", display9);

function display9(){

  localStorage.setItem('value', textarea.value);
//   textarea.innerHTML = localStorage.getItem("value")
}


//Hour 10


const buttonTen = document.querySelector(".sb10");
const textareaTen = document.querySelector(".t10");
textareaTen.innerHTML = localStorage.getItem("value10")
buttonTen.addEventListener("click", display10);

function display10(){

  localStorage.setItem('value10', textareaTen.value);
//   textarea.innerHTML = localStorage.getItem("value")
}


// Hour 11


const buttonEleven = document.querySelector(".sb11");
const textareaEleven = document.querySelector(".t11");
textareaEleven.innerHTML = localStorage.getItem("value11")
buttonEleven.addEventListener("click", display11);

function display11(){

  localStorage.setItem('value11', textareaEleven.value);
//   textarea.innerHTML = localStorage.getItem("value")
}

// Hour 12

const buttonTwelve = document.querySelector(".sb12");
const textareaTwelve = document.querySelector(".t12");
textareaTwelve.innerHTML = localStorage.getItem("value12")
buttonTwelve.addEventListener("click", display12);

function display12(){

  localStorage.setItem('value12', textareaTwelve.value);
//   textarea.innerHTML = localStorage.getItem("value")
}


// Hour 1


const buttonOne = document.querySelector(".sb1");
const textareaOne = document.querySelector(".t1");
textareaOne.innerHTML = localStorage.getItem("value1")
buttonOne.addEventListener("click", display1);

function display1(){

  localStorage.setItem('value1', textareaOne.value);
//   textarea.innerHTML = localStorage.getItem("value")
}

//Hour 2

const buttonTwo = document.querySelector(".sb2");
const textareaTwo = document.querySelector(".t2");
textareaTwo.innerHTML = localStorage.getItem("value2")
buttonTwo.addEventListener("click", display2);

function display2(){

  localStorage.setItem('value2', textareaTwo.value);
//   textarea.innerHTML = localStorage.getItem("value")
}


//Hour 3

const buttonThree = document.querySelector(".sb3");
const textareaThree = document.querySelector(".t3");
textareaThree.innerHTML = localStorage.getItem("value3")
buttonThree.addEventListener("click", display3);

function display3(){

  localStorage.setItem('value3', textareaThree.value);
//   textarea.innerHTML = localStorage.getItem("value")
}

//Hour 4

const buttonFour = document.querySelector(".sb4");
const textareaFour = document.querySelector(".t4");
textareaFour.innerHTML = localStorage.getItem("value4")
buttonFour.addEventListener("click", display4);

function display4(){

  localStorage.setItem('value4', textareaFour.value);
//   textarea.innerHTML = localStorage.getItem("value")
}

//Hour 5
const buttonFive = document.querySelector(".sb5");
const textareaFive = document.querySelector(".t5");
textareaFive.innerHTML = localStorage.getItem("value5")
buttonFive.addEventListener("click", display5);

function display5(){

  localStorage.setItem('value5', textareaFive.value);
//   textarea.innerHTML = localStorage.getItem("value")
}