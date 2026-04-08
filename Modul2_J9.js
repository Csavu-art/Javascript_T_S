function even(taulukko) {
    let parilliset = [];

    for (let luku of taulukko) {
        if (luku % 2 === 0) {
            parilliset.push(luku);
        }
    }

    return parilliset;
}

const luvut = [2, 7, 4, 9, 10, 13, 8];
const parillisetLuvut = even(luvut);

console.log("Alkuperäinen taulukko:", luvut);
console.log("Parilliset luvut:", parillisetLuvut);