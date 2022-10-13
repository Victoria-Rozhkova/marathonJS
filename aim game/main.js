const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeSpan = document.querySelector("#time");
const board = document.querySelector("#board");

let time = 0;
let score = 0;
let interval = null;
const colors = [
  "aquamarine",
  "darkcyan",
  "aqua",
  "green",
  "yellow",
  "orange",
  "purple",
  "deeppink",
];

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (e) => {
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});
board.addEventListener("click", (e) => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  interval = setInterval(timer, 1000);
  createRandomCircle();
  setTime(time);
}
function timer() {
  if (time === 0) {
    clearInterval(interval);
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}
function setTime(time) {
  timeSpan.innerHTML = `00:${time}`;
}
function createRandomCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const { height, width } = board.getBoundingClientRect();

  const size = getRandomNumber(20, 75);
  const xPos = getRandomNumber(0, width - size);
  const yPos = getRandomNumber(0, height - size);
  const color = getRandomColor();

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${yPos}px`;
  circle.style.left = `${xPos}px`;
  circle.style.background = color;

  board.append(circle);
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
function finishGame() {
  timeSpan.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет: <span class="primary"> ${score}</span></h1>
    <a href="#" class="start" id="restart">Сначала</a>`;

  const restartBtn = document.querySelector("#restart");
  restartBtn.style.marginLeft = "10px";
  restartBtn.addEventListener("click", restartGame);
}
function restartGame(e) {
  e.preventDefault();
  board.innerHTML = "";
  timeSpan.parentNode.classList.remove("hide");
  score = 0;
  screens[1].classList.remove("up");
}
