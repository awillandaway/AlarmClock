import '../scss/index.scss';
import { render, getCurrentDate, getCurrentTime, generateRangeArray, generateOptionElement, padNumber } from './utils';

let currentDate, currentTime, alarmTime;

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const AMorPM = document.getElementById("AM-or-PM");
const setAlarmBtn = document.getElementById("set-alarm");
const resetAlarmBtn = document.getElementById("reset-alarm");

function updateClock() {
  currentDate = getCurrentDate();
  currentTime = getCurrentTime();
  setTimeout(updateClock, 1000);
  render(currentDate, document.getElementById("date"));
  render(currentTime, document.getElementById("time"));
}

function populateSelectOptions() {
  let hoursOptions = generateRangeArray(12, 1);
  hoursOptions.forEach(option => {
    hours.add(generateOptionElement(padNumber(option)));
  });

  let minAndSecOptions = generateRangeArray(60, 0);
  minAndSecOptions.forEach(option => {
    minutes.add(generateOptionElement(padNumber(option)));
    seconds.add(generateOptionElement(padNumber(option)));
  });

  let AMorPMOptions = ["AM", "PM"];
  AMorPMOptions.forEach(option => AMorPM.add(generateOptionElement(option)));
}

function setAlarm() {
  resetAlarmBtn.disabled = false;
  alarmTime = `${hours.value}:${minutes.value}:${seconds.value} ${AMorPM.value}`;
  window.alert(`Alarm set for ${alarmTime}`);
  document.getElementById("alarm-time").innerText = `Alarm set for ${alarmTime}`;
}

function resetAlarm() {
  resetAlarmBtn.disabled = true;
  alarmTime = "";
  window.alert('Alarm has been reset. No alarm is currently set.');
  document.getElementById("alarm-time").innerText = "No alarm is currently set.";
}

function bindClickActions() {
  setAlarmBtn.addEventListener("click", setAlarm);
  resetAlarmBtn.addEventListener("click", resetAlarm);
}

updateClock();
populateSelectOptions();
bindClickActions();