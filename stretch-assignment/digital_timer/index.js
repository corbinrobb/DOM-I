
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');
const allDigits = document.querySelectorAll('.digits');


let msTensTime = 0;
let msHundredsTime = 0;
let secondOnesTime = 0;
let secondTensTime = 0;

function startTimer() {
  this.removeEventListener('click', startTimer);

  let int = setInterval(e => {
    if(msTensTime >= 10) {
      msTensTime = 0;
      msHundredsTime += 1;
    } else {
      msTensTime += 1;
    }

    if(msHundredsTime >= 10) {
      msHundredsTime = 0;
      secondOnesTime += 1;
    }

    if(secondOnesTime >= 10) {
      secondOnesTime = 0;
      secondTensTime += 1;
    }

    if (secondTensTime === 1) {
      clearInterval(int);
      allDigits.forEach(e => e.style.color = 'red');
    }

    msTens.textContent = msTensTime;
    msHundreds.textContent = msHundredsTime;
    secondOnes.textContent = secondOnesTime;
    secondTens.textContent = secondTensTime;
  }, 10);
}

function resetTimer() {
  msTensTime = 0;
  msHundredsTime = 0;
  secondOnesTime = 0;
  secondTensTime = 0;
  allDigits.forEach(e => e.style.color = 'black');
  msTens.textContent = msTensTime;
  msHundreds.textContent = msHundredsTime;
  secondOnes.textContent = secondOnesTime;
  secondTens.textContent = secondTensTime;
  startButton.addEventListener('click', startTimer);
}


const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer)