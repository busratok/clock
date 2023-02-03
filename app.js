const digitalHour = document.querySelector(".digital-hour");
const digitalMinute = document.querySelector(".digital-minute");
const digitalSecond = document.querySelector(".digital-second");

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const getTime = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  digitalHour.innerText = hours < 10 ? `0${hours}` : hours;
  digitalMinute.innerText = minutes < 10 ? `0${minutes}` : minutes;
  digitalSecond.innerText = seconds < 10 ? `0${seconds}` : seconds;
};

setInterval(getTime, 1000);
