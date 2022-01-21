import './style.css'
import { memo } from './memo.js'

const register = {
  calls: 0,
  time: 0,
}

const colorEl = document.querySelector('#color')
const colorButtonEl = document.querySelector('#colorButtonEl')
const colorButtonMemoEl = document.querySelector('#colorButtonMemoEl')


const rgbToHex = (...channels) => {

  const startTime = performance.now()
  Array.from({length: 1000000}).forEach(() => {})
  const hex = `#${channels.map(channel => channel.toString(16)).join('')}`
  const endTime = performance.now()

  register.calls += 1
  register.time =  endTime - startTime

  return hex;
}

const rgbToHexMemo = memo(rgbToHex)



const getRGBColors = () => {
  const colors = {
    R: parseInt(document.querySelector('#R').value),
    G: parseInt(document.querySelector('#G').value),
    B: parseInt(document.querySelector('#B').value),
    // Alpha: null,
  }

  return colors;
}

// Change Color Normal
colorButtonEl.addEventListener('click', (e) => {
  const colors = getRGBColors();
  colorEl.style.background = rgbToHex(colors.R, colors.G, colors.B)

  document.querySelector('#calls').innerHTML = register.calls
  document.querySelector('#time').innerHTML = register.time
});

// Change Color With Memo Function
colorButtonMemoEl.addEventListener('click', (e) => {
  const colors = getRGBColors();
  colorEl.style.background = rgbToHexMemo(colors.R, colors.G, colors.B)

  document.querySelector('#calls').innerHTML = register.calls
  document.querySelector('#time').innerHTML = register.time
})




