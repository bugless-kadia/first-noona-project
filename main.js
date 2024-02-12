let computerPickNum = 0;
let userInput = document.getElementById('user-input');
let userButton = document.getElementById('go-btn');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-btn');
let chanceArea = document.getElementById('chance-area');
let chances = 5;
let gameOver = false;
let userValueList = [];

userButton.addEventListener('click', play);
resetButton.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
  userInput.value = '';
});

function pickRandomNum() {
  computerPickNum = Math.floor(Math.random() * 100) + 1;
  console.log('정답', computerPickNum);
}
function play() {
  let userValue = userInput.value;
  if (userValue > 100) {
    resultArea.textContent = '1~100까지의 숫자를 입력하세요!';
    return;
  }
  if (userValueList.includes(userValue)) {
    resultArea.textContent = '이미 입력한 숫자입니다. 다시 입력하세요!';
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회: ${chances}번`;

  if (computerPickNum < userValue) {
    resultArea.textContent = 'DOWN!';
  } else if (computerPickNum > userValue) {
    resultArea.textContent = 'UP!';
  } else if (computerPickNum == userValue) {
    resultArea.textContent = '맞히셨습니다!!';
    gameOver = true;
  }
  userValueList.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    userButton.disabled = true;
  }
}
function reset() {
  pickRandomNum();
  userInput.value = '';
  resultArea.textContent = '결과값이 여기 나옵니다.';
  gameOver = false;
  userButton.disabled = false;
  chances = 5;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  userValueList = [];
}

pickRandomNum();
