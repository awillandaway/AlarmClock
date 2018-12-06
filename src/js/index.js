import '../scss/index.scss';

let currentDate, currentTime;

/**
 * Generic render function
 * @param {*} template An element/template to render in the provided node
 * @param {*} node The node to render the template in
 */

 // export this to a utils module
function render(template, node) {
	if (!node) {
    return;
  }
  else {
    node.innerHTML = template;
  }
}

// export this to a utils module
function getCurrentDate() {
  currentDate = new Date().toLocaleDateString('en-US', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  });
  return currentDate;
}

// export this to a utils module
function getCurrentTime() {
  currentTime = new Date().toLocaleTimeString();
  return currentTime;
}

function updateClock() {
  currentDate = getCurrentDate();
  currentTime = getCurrentTime();
  setTimeout(updateClock, 1000);
  render(currentDate, document.getElementById("date"));
  render(currentTime, document.getElementById("time"));
}

/**
 * Generate an array (of length len) of sequential numbers starting from the startIndex
 * @param {*} len
 * @param {*} startIndex 
 */
function generateRangeArray(len, startIndex) {
  return [...Array(len).keys()].map(i => i + startIndex);
}

/**
 * Returns a new Option element with the specified label and value. Defaults to using the label as the value
 * @param {*} label
 * @param {*} value 
 */
function generateOptionElement(label, value = label) {
  return new Option(label, value);
}

/**
 * Pads a number with a leading 0 if the number is less than 10, to mimic how numbers are displayed on digital clocks
 * @param {*} number 
 */
function padNumber(number) {
  if (number < 10) {
    return `0${number}`;
  }
  else {
    return number;
  }
}

function populateSelectOptions() {
  let hours = document.getElementById("hours");
  let hoursOptions = generateRangeArray(12, 1);
  hoursOptions.forEach(option => {
    hours.add(generateOptionElement(padNumber(option)));
  });

  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let minAndSecOptions = generateRangeArray(60, 0);
  minAndSecOptions.forEach(option => {
    minutes.add(generateOptionElement(padNumber(option)));
    seconds.add(generateOptionElement(padNumber(option)));
  });

  let AMorPM = document.getElementById("AM-or-PM");
  let AMorPMOptions = ["AM", "PM"];
  AMorPMOptions.forEach(option => AMorPM.add(generateOptionElement(option)));
}

updateClock();
populateSelectOptions();