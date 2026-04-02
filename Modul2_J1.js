let luvut = [];

for (let i = 0; i < 5; i++)
{

    let luku = +prompt("Anna luku");
    luvut.push(luku)
}

for (let i = 4; i < luvut.length; i++)
{
    console.log(luvut[luvut.length - 1 - i]);
}
