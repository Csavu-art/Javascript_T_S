'use strict';

// ----------------------------
// 1-4 TVMaze
// ----------------------------

const tvForm = document.querySelector('#tvForm');
const resultsDiv = document.querySelector('#results');

tvForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = document.querySelector('#query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();

  // Task 2: print result to console
  console.log(data);

  // Clear old results
  resultsDiv.innerHTML = '';

  // Task 3-4: show results on page
  data.forEach(tvShow => {
    const show = tvShow.show;

    const article = document.createElement('article');

    const title = document.createElement('h2');
    title.textContent = show.name;

    const link = document.createElement('a');
    link.href = show.url;
    link.target = '_blank';
    link.textContent = 'Show details';

    const image = document.createElement('img');

    // Task 4: default image if missing
    if (show.image && show.image.medium) {
      image.src = show.image.medium;
    } else {
      image.src = 'https://placehold.co/210x295?text=Not%20Found';
    }

    image.alt = show.name;

    const summary = document.createElement('div');
    summary.innerHTML = show.summary || 'No summary available.';

    article.appendChild(title);
    article.appendChild(link);
    article.appendChild(image);
    article.appendChild(summary);

    resultsDiv.appendChild(article);
  });
});


// ----------------------------
// 5 Random Chuck Norris joke
// ----------------------------

const randomJokeBtn = document.querySelector('#randomJokeBtn');

randomJokeBtn.addEventListener('click', async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();

  // Print only the joke
  console.log(data.value);
});


// ----------------------------
// 6 Search Chuck Norris jokes
// ----------------------------

const jokeForm = document.querySelector('#jokeForm');
const jokeResultsDiv = document.querySelector('#jokeResults');

jokeForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const jokeQuery = document.querySelector('#jokeQuery').value;

  const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${jokeQuery}`);
  const data = await response.json();

  console.log(data);

  jokeResultsDiv.innerHTML = '';

  data.result.forEach(joke => {
    const article = document.createElement('article');

    const p = document.createElement('p');
    p.textContent = joke.value;

    article.appendChild(p);
    jokeResultsDiv.appendChild(article);
  });
});