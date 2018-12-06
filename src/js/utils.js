/**
 * Generic render function which sets a node's innerHTML to the provided template
 * @param {HTMLElement} template An element/template to render in the provided node
 * @param {HTMLElement} node The node to render the template in
 */
export function render(template, node) {
	if (!node) {
    return;
  }
  node.innerHTML = template;
}

/** Returns the current date in en-US format */
export function getCurrentDate() {
  let currentDate = new Date().toLocaleDateString('en-US', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  });
  return currentDate;
}

/** Returns the current time as a string with padding*/
export function getCurrentTime() {
  let now = new Date();
  let hours = now.getHours(), AMorPM = "AM";
  // convert to 12-hour format
  if (hours > 12) {
    hours = hours - 12;
    AMorPM = "PM";
  }
  // make sure to pad all numbers if necessary
  return `${padNumber(hours)}:${padNumber(now.getMinutes())}:${padNumber(now.getSeconds())} ${AMorPM}`
  //one-line solution for padding that was working in all browsers except IE
  //return currentTime.substring(0, currentTime.indexOf(':')) < 10 ? `0${currentTime}` : currentTime;
}

/**
 * Generate an array (of length len) of sequential numbers starting from the start parameter
 * @param {number} start Number to start the array at
 * @param {number} end Number to end the array at
 */
export function generateRangeArray(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

/**
 * Returns a new Option element with the specified label and value. Defaults to using the label as the value
 * @param {string} label Label of the option element
 * @param {string} value Value  of the option element. Defaults to label
 */
export function generateOptionElement(label, value = label) {
  return new Option(label, value);
}

/**
 * Pads a number with a leading 0 if the number is less than 10, to mimic how numbers are displayed on digital clocks
 * @param {number} number 
 */
export function padNumber(number) {
  if (number < 10) {
    return `0${number}`;
  }
  else {
    return number;
  }
}