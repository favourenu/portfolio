const images = document.querySelectorAll(".imgs");
const onePic = document.querySelector(".one");
const correctPop = document.querySelector(".correct-pop");
const coverBox = document.querySelector(".cover");

const correctNum = document.querySelector(".correct-num");
const resultEl = document.querySelector(".result");
const winLose = document.querySelector(".win-lose");
const chancesNum = document.querySelector(".chances-num");

const overlay = document.querySelector(".overlay");
const playAgainBtn = document.querySelector("#play-again");
const showBtn = document.querySelector("#show-btn");
const showNum = document.querySelector(".show-num");

const rand = Math.floor(Math.random() * 9) + 1;
onePic.src = `pic-${rand}.avif`;

let correctVar = 0;
let chancesVar = 10;
let showVarNum = 1;
let playing = true;

for (let i = 0; i < 9; i++) {
  images[i].addEventListener("click", () => {
    if (images[i].src === onePic.src) {
      correctPop.classList.remove("hidden");
      coverBox.classList.add("hidden");

      correctVar++;
      correctNum.textContent = correctVar;
      correctNum.style.color = "green";

      if (correctVar === 3) {
        resultEl.classList.remove("hidden");
        overlay.classList.remove("hidden");
        coverBox.classList.remove("hidden");
        correctPop.classList.add("hidden");
      }

      setTimeout(() => {
        correctPop.classList.add("hidden");
        coverBox.classList.remove("hidden");

        const rand = Math.floor(Math.random() * 9) + 1;
        onePic.src = `pic-${rand}.avif`;
      }, 1500);
    } else {
      chancesVar--;
      chancesNum.textContent = chancesVar;
      chancesNum.style.color = "red";
      if (chancesVar === 0) {
        winLose.textContent = `YOU LOST THE GAME😖`;

        resultEl.classList.remove("hidden");
        resultEl.style.backgroundColor = "red";

        overlay.classList.remove("hidden");
      }
    }
  });
}

playAgainBtn.addEventListener("click", () => {
  resultEl.classList.add("hidden");
  overlay.classList.add("hidden");

  correctVar = 0;
  chancesVar = 10;
  showVarNum = 1;

  showNum.textContent = showVarNum;
  correctNum.textContent = correctVar;
  chancesNum.textContent = chancesVar;

  chancesNum.style.color = "black";
  correctNum.style.color = "black";
});

showBtn.addEventListener("click", () => {
  if (playing && showVarNum === 1) {
    coverBox.classList.add("hidden");
    showVarNum = 0;
    showNum.textContent = showVarNum;
  } else {
    playing = false;
  }
});
