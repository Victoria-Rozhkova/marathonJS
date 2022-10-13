const board = document.getElementById("board");

const colors = [
  "red",
  "blue",
  "aqua",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}
function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(event) {
  const element = event.target;
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
