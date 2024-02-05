const dice = document.querySelector('#dice-icon');
const adviceId = document.querySelector('#advice-id');
const advice = document.querySelector('q');

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if(!response.ok) {
      throw new Error("Failed to fetch advice. Please try again later.");
    }

    const data = await response.json();
    adviceId.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;

  } catch(error) {
    advice.innerHTML = `Sorry, no advice :( - ${error.message}`
  }
}

dice.addEventListener('click', getAdvice);