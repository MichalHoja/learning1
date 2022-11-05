const scrollingValuesElement = document.querySelector(".scrolling-values");
const playPauseBtn = document.querySelector(".play-pause");
const values = ["Hello", "How are you", "Im good", "you", "kurwa"];
let isRunning = true;

const animate = setInterval(changeValue, 5000);

function setBtnText() {
  playPauseBtn.textContent = isRunning ? "Pause" : "Play";
}

function valuesControlls() {
  if (isRunning) {
    clearInterval(animate);
    isRunning = false;
    setBtnText();
  } else {
    setInterval(changeValue, 5000);
    isRunning = true;
    setBtnText();
  }
}

function changeValue() {
  const value = values.shift();
  values.push(value);
  scrollingValuesElement.textContent = value;
}

setBtnText();
changeValue();

playPauseBtn.addEventListener("click", valuesControlls);
