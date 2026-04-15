'use strict';

const calculation = document.getElementById('calculation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener('click', function () {
  const input = calculation.value;
  let number1;
  let number2;
  let operator;
  let answer;

  if (input.includes('+')) {
    operator = '+';
  } else if (input.includes('-')) {
    operator = '-';
  } else if (input.includes('*')) {
    operator = '*';
  } else if (input.includes('/')) {
    operator = '/';
  }

  const parts = input.split(operator);
  number1 = parseInt(parts[0]);
  number2 = parseInt(parts[1]);

  if (operator === '+') {
    answer = number1 + number2;
  } else if (operator === '-') {
    answer = number1 - number2;
  } else if (operator === '*') {
    answer = number1 * number2;
  } else if (operator === '/') {
    answer = number1 / number2;
  }

  result.textContent = answer;
});