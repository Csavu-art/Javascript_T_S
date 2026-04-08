let luvut = [];
let luku;

do {
    luku = +prompt("Anna luku (0 lopettaa):");

    if (luku !== 0) {
        luvut.push(luku);
    }
} while (luku !== 0);

luvut.sort(function(a, b) {
    return b - a;
});

for (let luku of luvut) {
    console.log(luku);
}