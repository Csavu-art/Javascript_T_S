let ehdokasMaara = +prompt("Kuinka monta ehdokasta?");
let ehdokkaat = [];

// Kysytään ehdokkaiden nimet
for (let i = 0; i < ehdokasMaara; i++) {
    let nimi = prompt(`Anna ehdokkaan ${i + 1} nimi:`);
    ehdokkaat.push({
        name: nimi,
        votes: 0
    });
}

let aanestajaMaara = +prompt("Kuinka monta äänestäjää?");

// Kysytään äänet
for (let i = 0; i < aanestajaMaara; i++) {
    let aani = prompt(`Äänestäjä ${i + 1}, anna ehdokkaan nimi:`);

    if (aani === "") {
        continue;
    }

    for (let ehdokas of ehdokkaat) {
        if (ehdokas.name === aani) {
            ehdokas.votes++;
            break;
        }
    }
}

// Järjestetään eniten ääniä saanut ensimmäiseksi
ehdokkaat.sort(function(a, b) {
    return b.votes - a.votes;
});

// Tulostetaan voittaja
console.log(`The winner is ${ehdokkaat[0].name} with ${ehdokkaat[0].votes} votes.`);

// Tulostetaan kaikki tulokset
console.log("results:");
for (let ehdokas of ehdokkaat) {
    console.log(`${ehdokas.name}: ${ehdokas.votes} votes`);
}