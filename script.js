const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";
let getJoke = () => {
  setTimeout(() => {
    jokeContainer.classList.remove("fade");
  }, 1);

  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      setTimeout(() => {
        jokeContainer.classList.add("fade");
      }, 1); // Add the "fade" class after the text update
    });
};

btn.addEventListener("click", getJoke);
