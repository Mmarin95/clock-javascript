import Numbers from "./NumbersMap.js";
setInterval(tick, 1000);

const hoursNumberOne = document.querySelector("[data-hours-number-1]");
const hoursNumberTwo = document.querySelector("[data-hours-number-2]");
const minutesNumberOne = document.querySelector("[data-minutes-number-1]");
const minutesNumberTwo = document.querySelector("[data-minutes-number-2]");
const secondsNumberOne = document.querySelector("[data-seconds-number-1]");
const secondsNumberTwo = document.querySelector("[data-seconds-number-2]");

// FIXME: Seconds change slow... too much JS
function tick() {
  const currentDate = new Date();
  const seconds = stringDate(currentDate.getSeconds().toString());
  const minutes = stringDate(currentDate.getMinutes().toString());
  const hours = stringDate(currentDate.getHours().toString());

  setNumber(seconds[0], secondsNumberOne);
  setNumber(seconds[1], secondsNumberTwo);
  setNumber(minutes[0], minutesNumberOne);
  setNumber(minutes[1], minutesNumberTwo);
  setNumber(hours[0], hoursNumberOne);
  setNumber(hours[1], hoursNumberTwo);
}

function stringDate(date) {
  return date.length == 2 ? date : "0" + date;
}

function setNumber(number, numberPosition) {
  const sticks = Array.from(numberPosition.children);
  sticks.forEach((stick) => {
    const stickNumber = stick.classList[2];
    const map = Numbers[number][stickNumber];
    stick.style.setProperty("--display-stick", map.display);
  });
}

tick();
