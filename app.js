const form = document.querySelector(".quiz-form");
const finalScoreContainer = document.querySelector(".final-score-container");

const correctAnswers = ["D", "B", "C", "A"];
let score = 0;

const getUsersAnswer = () => correctAnswers.map((_, index) =>
    form[`inputQuestion${index + 1}`].value)


const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const ifUserAnswerCorrect = userAnswer === correctAnswers[index]

    if (ifUserAnswerCorrect) {
      score += 25;
    }
  });
};

const showFinalScore = () => {
  scrollTo({
    top: 164,
    left: 0,
    behavior: 'smooth'
  })
  finalScoreContainer.classList.remove("d-none");
};

const animateFinalScore = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    finalScoreContainer.querySelector("span").textContent = `${counter++}%`;
  }, 20);
}

form.addEventListener("submit", event => {
  event.preventDefault();

  // obtem as resposts do usuario
  const userAnswers = getUsersAnswer()

  // Calcula pontuação das respostas
  calculateUserScore(userAnswers)

  // exibe a pontuação e sobre a tela
  showFinalScore()
  
  // anima pontuação 
  animateFinalScore()

});
