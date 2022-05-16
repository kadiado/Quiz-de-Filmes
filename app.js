const form = document.querySelector('.quiz-form');
const finalResult = document.querySelector('.result')

const correctAnswers = ['D', 'B', 'C', 'A'];

form.addEventListener('submit', event => {
	event.preventDefault();
	
	let score = 0;
	const userAnswers = [
			form.inputQuestion1.value,
			form.inputQuestion2.value,
			form.inputQuestion3.value,
			form.inputQuestion4.value
	]
	
	userAnswers.forEach((userAnswer, index) => {
		if (userAnswer === correctAnswers[index]) {
			score += 25
		}
	})

	scrollTo({
    top: 164,
    left: 0,
    behavior: 'smooth'
  });
	
	let counter = 0
	
	const timer = setInterval(() => {
		if  (counter === score ) {
			clearInterval(timer)
		};
		finalResult.querySelector('span').textContent = `${counter}%`
	counter++
		finalResult.classList.remove('d-none')
	}, 50);
	
});

