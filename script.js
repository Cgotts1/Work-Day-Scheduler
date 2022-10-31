var displayCurrentTime = document.querySelector("#currentDay");  // querySelector for displaying time at top of page

// querySelectors for all the time columns, prevents button from being highlighted around
let nine = document.querySelector(".nine");
let ten = document.querySelector(".ten");
let eleven = document.querySelector(".eleven");
let twelve = document.querySelector(".twelve");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");

// Code for changing the color timeblocks. Assisted by Anthony Farris.

var hourArray = [
  [nine, 09],
  [ten, 10],
  [eleven, 11],
  [twelve, 12],
  [one, 13],
  [two, 14],
  [three, 15],
  [four, 16],
  [five, 17],
];

var currentHourFunction = function () {
  currentHour = moment().format("HH");
  for (i = 0; i < hourArray.length; i++) {
    if (currentHour == hourArray[i][1]) {
      hourArray[i][0].classList.add("present");
    } else if (currentHour > hourArray[i][1]) {
      hourArray[i][0].classList.add("past");
    } else if (currentHour < hourArray[i][1]) {
      hourArray[i][0].classList.add("future");
    }
  }
};

currentHourFunction();

//Sets the date at the top of the page upon loading of the page
setInterval(function () {
  var time = moment().format("dddd MMM Do, YYYY");
  displayCurrentTime.textContent = time;
}, 1000);

// Code for each textarea and corresponding button to save to local storage

// Hour 9
const button = document.querySelector(".sb9");
const textarea = document.querySelector(".t9");
textarea.innerHTML = localStorage.getItem("value");
button.addEventListener("click", display9);

function display9() {
  localStorage.setItem("value", textarea.value);
}

// Hour 10
const buttonTen = document.querySelector(".sb10");
const textareaTen = document.querySelector(".t10");
textareaTen.innerHTML = localStorage.getItem("value10");
buttonTen.addEventListener("click", display10);

function display10() {
  localStorage.setItem("value10", textareaTen.value);
}

// Hour 11
const buttonEleven = document.querySelector(".sb11");
const textareaEleven = document.querySelector(".t11");
textareaEleven.innerHTML = localStorage.getItem("value11");
buttonEleven.addEventListener("click", display11);

function display11() {
  localStorage.setItem("value11", textareaEleven.value);
}

// Hour 12
const buttonTwelve = document.querySelector(".sb12");
const textareaTwelve = document.querySelector(".t12");
textareaTwelve.innerHTML = localStorage.getItem("value12");
buttonTwelve.addEventListener("click", display12);

function display12() {
  localStorage.setItem("value12", textareaTwelve.value);
}

// Hour 1
const buttonOne = document.querySelector(".sb1");
const textareaOne = document.querySelector(".t1");
textareaOne.innerHTML = localStorage.getItem("value1");
buttonOne.addEventListener("click", display1);

function display1() {
  localStorage.setItem("value1", textareaOne.value);
}

// Hour 2
const buttonTwo = document.querySelector(".sb2");
const textareaTwo = document.querySelector(".t2");
textareaTwo.innerHTML = localStorage.getItem("value2");
buttonTwo.addEventListener("click", display2);

function display2() {
  localStorage.setItem("value2", textareaTwo.value);
}

// Hour 3
const buttonThree = document.querySelector(".sb3");
const textareaThree = document.querySelector(".t3");
textareaThree.innerHTML = localStorage.getItem("value3");
buttonThree.addEventListener("click", display3);

function display3() {
  localStorage.setItem("value3", textareaThree.value);
}

// Hour 4
const buttonFour = document.querySelector(".sb4");
const textareaFour = document.querySelector(".t4");
textareaFour.innerHTML = localStorage.getItem("value4");
buttonFour.addEventListener("click", display4);

function display4() {
  localStorage.setItem("value4", textareaFour.value);
}

// Hour 5
const buttonFive = document.querySelector(".sb5");
const textareaFive = document.querySelector(".t5");
textareaFive.innerHTML = localStorage.getItem("value5");
buttonFive.addEventListener("click", display5);

function display5() {
  localStorage.setItem("value5", textareaFive.value);
}
