'use strict';

const form = document.getElementById('source');
const target = document.getElementById('target');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = form.elements.firstname.value;
  const lastName = form.elements.lastname.value;

  target.textContent = `Your name is ${firstName} ${lastName}`;
});