import '../scss/index.scss';
import { render, getCurrentDate, getCurrentTime, generateRangeArray, generateOptionElement, padNumber } from './utils';

let currentDate, currentTime;

function updateClock() {
  currentDate = getCurrentDate();
  currentTime = getCurrentTime();
  setTimeout(updateClock, 1000);
  render(currentDate, document.getElementById("date"));
  render(currentTime, document.getElementById("time"));
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