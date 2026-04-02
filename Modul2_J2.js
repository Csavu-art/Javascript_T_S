let lkm = +prompt("Kuinka monta osallistujaa?")

let nimet =[];
for (let i = 0; i < lkm; i++)
{
    let nimi = prompt("Osallistujan nimi?")
    nimet.push(nimi);
}

nimet.sort();

let html = "";
for (let nimi of nimet)

{
    html += `<li>${nimi}</li>`;
}

document.querySelector("#target").innerHTML = html;