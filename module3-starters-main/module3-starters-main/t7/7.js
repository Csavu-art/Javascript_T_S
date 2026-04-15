'use strict';

const image = document.getElementById('target');
const trigger = document.getElementById('trigger');

trigger.addEventListener('mouseenter', function () {
  image.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseleave', function () {
  image.src = 'img/picA.jpg';
});