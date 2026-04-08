let koirat = [];

for (let i = 0; i < 6; i++) {
    let nimi = prompt("Anna koiran nimi:");
    koirat.push(nimi);
}

koirat.sort();
koirat.reverse();

let html = "";

for (let koira of koirat) {
    html += `<li>${koira}</li>`;
}

document.querySelector("#target").innerHTML = html;