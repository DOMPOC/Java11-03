let mokiniai =[
    'Ieva',
    'Andrius',
    'Petras'
];
let mokinys = {
    akodas:345969585,
    vardas: "Petras",
    pavarde: "Petraitis",
    email:"petras@one.lt"
}

/*for (let mokinys in mokiniai){
    console.log(mokinys + "+mokiniai[mokinys]" ])
}*/

for (let item in mokinys){
    console.log(item+": "+mokinys[item])
}
