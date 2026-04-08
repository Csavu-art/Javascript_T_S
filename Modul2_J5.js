let luvut = [];
let luku;

while (true) {
    luku = +prompt("Anna luku:");

    if (luvut.includes(luku)) {
        console.log("Luku on jo annettu.");
        break;
    }

    luvut.push(luku);
}

luvut.sort(function(a, b) {
    return a - b;
});

for (let luku of luvut) {
    console.log(luku);
}