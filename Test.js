'use strict';

// 1
console.log("I'm printing to console!");

// 2
let nimi = prompt("Anna nimesi:");
document.querySelector('#teksti').innerHTML = "Hello, " + nimi + "!";

// 3
let luku1 = parseInt(prompt("Anna ensimmäinen kokonaisluku:"), 10);
let luku2 = parseInt(prompt("Anna toinen kokonaisluku:"), 10);
let luku3 = parseInt(prompt("Anna kolmas kokonaisluku:"), 10);

let summa = luku1 + luku2 + luku3;
let tulo = luku1 * luku2 * luku3;
let keskiarvo = summa / 3;

document.querySelector('#summa').innerHTML = "Summa: " + summa;
document.querySelector('#tulo').innerHTML = "Tulo: " + tulo;
document.querySelector('#keskiarvo').innerHTML = "Keskiarvo: " + keskiarvo;

// 4
let opiskelija = prompt("Anna oppilaan nimi:");
let arpa = Math.floor(Math.random() * 4) + 1;
let tupa = "";

if (arpa === 1) {
    tupa = "Gryffindor";
} else if (arpa === 2) {
    tupa = "Slytherin";
} else if (arpa === 3) {
    tupa = "Hufflepuff";
} else {
    tupa = "Ravenclaw";
}

document.querySelector('#house').innerHTML = opiskelija + ", you are " + tupa + ".";

// 5
let vuosi = parseInt(prompt("Anna vuosiluku:"), 10);
let onKarkausvuosi = false;

if (vuosi % 400 === 0) {
    onKarkausvuosi = true;
} else if (vuosi % 100 === 0) {
    onKarkausvuosi = false;
} else if (vuosi % 4 === 0) {
    onKarkausvuosi = true;
} else {
    onKarkausvuosi = false;
}

if (onKarkausvuosi) {
    document.querySelector('#leapyear').innerHTML = vuosi + " is a leap year.";
} else {
    document.querySelector('#leapyear').innerHTML = vuosi + " is not a leap year.";
}

// 6
let vastaus = confirm("Should I calculate the square root?");

if (vastaus) {
    let numero = parseFloat(prompt("Anna numero:"));

    if (numero < 0) {
        document.querySelector('#sqrtresult').innerHTML = "The square root of a negative number is not defined.";
    } else {
        let juuri = Math.sqrt(numero);
        document.querySelector('#sqrtresult').innerHTML = "The square root of " + numero + " is " + juuri + ".";
    }
} else {
    document.querySelector('#sqrtresult').innerHTML = "The square root is not calculated.";
}

// 7
let heittojenMaara = parseInt(prompt("Kuinka monta noppaa heitetään?"), 10);
let noppaSumma = 0;

for (let i = 0; i < heittojenMaara; i++) {
    let heitto = Math.floor(Math.random() * 6) + 1;
    noppaSumma += heitto;
}

document.querySelector('#diceSum').innerHTML = "The sum of the dice rolls is " + noppaSumma + ".";

// 8
let alkuVuosi = parseInt(prompt("Anna aloitusvuosi:"), 10);
let loppuVuosi = parseInt(prompt("Anna lopetusvuosi:"), 10);

let lista = "";

for (let vuosiLista = alkuVuosi; vuosiLista <= loppuVuosi; vuosiLista++) {
    if (vuosiLista % 400 === 0 || (vuosiLista % 4 === 0 && vuosiLista % 100 !== 0)) {
        lista += "<li>" + vuosiLista + "</li>";
    }
}

document.querySelector('#leapYearsList').innerHTML = lista;

// 9
let numerot = [];
let annettuLuku;

while (true) {
    annettuLuku = parseFloat(prompt("Anna luku (0 lopettaa):"));

    if (annettuLuku === 0) {
        break;
    }

    numerot.push(annettuLuku);
}

numerot.sort(function(a, b) {
    return b - a;
});

let numeroLista = "";

for (let i = 0; i < numerot.length; i++) {
    numeroLista += "<li>" + numerot[i] + "</li>";
}

document.querySelector('#numberList').innerHTML = numeroLista;

// 10
let uniikitNumerot = [];
let uusiLuku;

while (true) {
    uusiLuku = parseFloat(prompt("Anna luku 10-tehtävää varten:"));

    if (uniikitNumerot.includes(uusiLuku)) {
        alert("The number has already been given. Program ends.");
        break;
    }

    uniikitNumerot.push(uusiLuku);
}

uniikitNumerot.sort(function(a, b) {
    return a - b;
});

let uniikkiLista = "";

for (let i = 0; i < uniikitNumerot.length; i++) {
    uniikkiLista += "<li>" + uniikitNumerot[i] + "</li>";
}

document.querySelector('#uniqueNumberList').innerHTML = uniikkiLista;