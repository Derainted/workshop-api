const jokeText = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

// function getJoke() {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       jokeText.textContent = data.joke;
//     })
//     .catch((error) => {
//       jokeText.textContent = "Something went wrong";
//       console.error(error);
//     });
// }

// getJoke();

async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    jokeText.textContent = data.joke;
  } catch (error) {
    jokeText.textContent = "Something went wrong";
    console.error(error);
  }
}

jokeButton.addEventListener("click", getJoke);
