setInterval(setClock, 1000);

const hoursHand = document.querySelector("[data-hours-hand]");
const minutesHand = document.querySelector("[data-minutes-hand]");
const secondsHand = document.querySelector("[data-seconds-hand]");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 24;

  setRotation(hoursHand, hoursRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(secondsHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
