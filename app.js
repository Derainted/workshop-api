const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

async function getJoke() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });

    const data = await response.json();
    jokeEl.textContent = data.joke;

  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeEl.textContent = 'Something went wrong 😅';
  }
}

jokeBtn.addEventListener('click', getJoke);






