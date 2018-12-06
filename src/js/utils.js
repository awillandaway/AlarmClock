/**
 * Generic render function
 * @param {*} template An element/template to render in the provided node
 * @param {*} node The node to render the template in
 */

export function render(template, node) {
	if (!node) {
    return;
  }
  else {
    node.innerHTML = template;
  }
}

export function getCurrentDate() {
  let currentDate = new Date().toLocaleDateString('en-US', {  
    day : 'numeric',
    month : 'short',
    year : 'numeric'
  });
  return currentDate;
}

export function getCurrentTime() {
  let currentTime = new Date().toLocaleTimeString();
  return currentTime;
}

/**
 * Generate an array (of length len) of sequential numbers starting from the startIndex
 * @param {*} len
 * @param {*} startIndex 
 */
export function generateRangeArray(len, startIndex) {
  return [...Array(len).keys()].map(i => i + startIndex);
}

/**
 * Returns a new Option element with the specified label and value. Defaults to using the label as the value
 * @param {*} label
 * @param {*} value 
 */
export function generateOptionElement(label, value = label) {
  return new Option(label, value);
}

/**
 * Pads a number with a leading 0 if the number is less than 10, to mimic how numbers are displayed on digital clocks
 * @param {*} number 
 */
export function padNumber(number) {
  if (number < 10) {
    return `0${number}`;
  }
  else {
    return number;
  }
}