function heitaNoppaa() {
    return Math.floor(Math.random() * 6) + 1;
}

let html = "";
let tulos;

do {
    tulos = heitaNoppaa();
    html += `<li>${tulos}</li>`;
} while (tulos !== 6);

document.querySelector("#target").innerHTML = html;