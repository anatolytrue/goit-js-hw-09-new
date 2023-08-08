const body = document.body
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
let timerId = null

startBtn.addEventListener('click', handleStart)
stopBtn.addEventListener('click', handleStop)

function handleStart() {
    timerId = setInterval(changeColor, 1000);
    startBtn.disabled = true
}
function handleStop() {
    clearInterval(timerId)
    startBtn.disabled = false
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function changeColor() {
    const newColor = getRandomHexColor()
    body.style.backgroundColor = newColor
}
