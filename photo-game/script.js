const rand = Math.trunc(Math.random() * 9) + 1;
const manyP = document.querySelectorAll(".many");
const overlay = document.querySelector(".overlay");
const result = document.querySelector(".result");
const playAgain = document.querySelector("#play-again");
const one = document.querySelector("#one");
const chances = document.querySelector(".chances");
const winLose = document.querySelector(".win-lose");

one.src = `/image/pic-${rand}.avif`;

const gameWon = () => {
  overlay.classList.remove("hide");
  result.classList.remove("hide");
};

let num = 4;

for (let i = 0; i < 10; i++) {
  manyP[i].addEventListener("click", () => {
    const one = document.querySelector("#one");
    const randMath = Math.trunc(Math.random() * 9) + 1;
    manyP.src = `/image/pic-${randMath}.avif`;
    if (manyP[i].src === one.src) {
      console.log("We are Almost there");
      gameWon();
    } else {
      console.log("thats not the one");
      num--;
      chances.textContent = num;
      if (num === 0) {
        winLose.textContent = "YOU LOST THE GAME 😖";
        result.style.backgroundColor = "red";
        gameWon();
      }
    }
  });
}

for (let i = 0; i < 9; i++) {
  playAgain.addEventListener("click", () => {
    const randnum = Math.trunc(Math.random() * 9) + 1;
    one.src = `/image/pic-${randnum}.avif`;
    overlay.classList.add("hide");
    result.classList.add("hide");
    num = 4;
    chances.textContent = num;
  });
}
