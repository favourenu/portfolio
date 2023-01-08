const multiPic = document.querySelectorAll(".many");
const onePic = document.querySelector("#one");
const overlay = document.querySelector(".overlay");
const correct = document.querySelector(".correct");
const resultEl = document.querySelector(".result");
const chances = document.querySelector(".chances");
const winCount = document.querySelector(".count-win");
const winLose = document.querySelector(".win-lose");
const playAgainbtn = document.querySelector("#play-again");

const randyNum = Math.floor(Math.random() * 10) + 1;
onePic.src = `pic-${randyNum}.avif`;

const correctPic = () => {
  overlay.classList.remove("hide");
  correct.classList.remove("hide");
};
const gameWin = () => {
  overlay.classList.remove("hide");
  correct.classList.add("hide");
  resultEl.classList.remove("hide");
};

const exit = () => {
  overlay.classList.add("hide");
  correct.classList.add("hide");
  resultEl.classList.add("hide");
};

let chancesNum = 10;
let countNum = 0;

for (let i = 0; i < 10; i++) {
  multiPic[i].addEventListener("click", () => {
    if (multiPic[i].src === onePic.src) {
      winCount.textContent = countNum + 1;
      correctPic();
      multiPic;
      countNum++;
      winCount.style.color = "green";
      console.log(countNum);
      document.querySelector(".cover").classList.add("hide");
    } else {
      chances.textContent = chancesNum - 1;
      chancesNum--;
      chances.style.color = "red";
    }
    if (chancesNum === 0) {
      gameWin();
      winLose.textContent = " GAME OVER😖";
      resultEl.style.backgroundColor = "red";
      winLose.style.color = "#fff";
    }
    if (countNum === 3) {
      gameWin();
    }
  });
}

correct.addEventListener("click", () => {
  exit();
  const rand = Math.floor(Math.random() * 10) + 1;
  onePic.src = `pic-${rand}.avif`;
  document.querySelector(".cover").classList.remove("hide");
});

playAgainbtn.addEventListener("click", () => {
  exit();
  const randMath = Math.floor(Math.random() * 10) + 1;
  onePic.src = `pic-${randMath}.avif`;
  countNum = 0;
  winCount.textContent = countNum;
  chancesNum = 10;
  chances.textContent = chancesNum;
  document.querySelector(".cover").classList.remove("hide");
  chances.style.color = "black";
  winCount.style.color = "black";
});
