function concat(taulukko) {
    let merkkijono = "";

    for (let sana of taulukko) {
        merkkijono += sana;
    }

    return merkkijono;
}

const nimet = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const tulos = concat(nimet);

document.querySelector('#target').innerHTML = tulos;