function heitaNoppaa(maksimi) {
    return Math.floor(Math.random() * maksimi) + 1;
}

let maksimi = +prompt("Anna nopan suurin silmäluku:");
let tulos;
let html = "";

do {
    tulos = heitaNoppaa(maksimi);
    html += `<li>${tulos}</li>`;
} while (tulos !== maksimi);

document.querySelector("#target").innerHTML = html;