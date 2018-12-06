import '../scss/index.scss';
import { render, getCurrentDate, getCurrentTime, generateRangeArray, generateOptionElement, padNumber } from './utils';

let currentDate, currentTime, alarmTime;

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const AMorPM = document.getElementById("AM-or-PM");
const setAlarmBtn = document.getElementById("set-alarm");
const resetAlarmBtn = document.getElementById("reset-alarm");

/** Updates the clock to match the current time. Runs every 1000ms */
function updateClock() {
  currentDate = getCurrentDate();
  currentTime = getCurrentTime();
  render(currentDate, document.getElementById("date"));
  render(currentTime, document.getElementById("time"));
  if (alarmTime) { checkAlarm() }
  setTimeout(updateClock, 1000);
}

/** Populates the options for the select inputs */
function populateSelectOptions() {
  let hoursOptions = generateRangeArray(12, 1);
  hoursOptions.forEach(option => {
    hours.add(generateOptionElement(padNumber(option)));
  });

  let minutesOptions = generateRangeArray(60, 0);
  minutesOptions.forEach(option => {
    minutes.add(generateOptionElement(padNumber(option)));
  });

  let AMorPMOptions = ["AM", "PM"];
  AMorPMOptions.forEach(option => AMorPM.add(generateOptionElement(option)));
}

/** Sets an alarm for the current time specified by the select inputs and alerts the user */
function setAlarm() {
  resetAlarmBtn.disabled = false;
  alarmTime = `${hours.value}:${minutes.value} ${AMorPM.value}`;
  window.alert(`Alarm set for ${alarmTime}`);
  document.getElementById("alarm-time").innerText = `Alarm set for ${alarmTime}`;
}

/** Clears the alarm and alerts the user */
function resetAlarm() {
  resetAlarmBtn.disabled = true;
  alarmTime = "";
  window.alert('Alarm has been reset. No alarm is currently set.');
  document.getElementById("alarm-time").innerText = "No alarm is currently set.";
}

/** Check to see if the current time matches the alarm time. If so, alert the user and reset the alarm */
function checkAlarm() {
  let timeString = currentTime.substring(0, 5) + currentTime.substring(8);
  if (timeString.valueOf() === alarmTime.valueOf()) {
    window.alert("Alarm is going off! Alarm will be reset upon closing this alert.");
    resetAlarmBtn.disabled = true;
    alarmTime = "";
    document.getElementById("alarm-time").innerText = "No alarm is currently set.";
  }
}

/** Bind the setAlarm and resetAlarm click actions to their respective buttons */
function bindClickActions() {
  setAlarmBtn.addEventListener("click", setAlarm);
  resetAlarmBtn.addEventListener("click", resetAlarm);
}

updateClock();
populateSelectOptions();
bindClickActions();