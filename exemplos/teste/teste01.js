const frase = "Science without religion is lame, religion without science is blind."
var res = frase.replace("without", "with");
console.log(res)

let personagem = {
    velocidade : 9,
    poder : 15,
    sorte : 20
  }

var r1 = Object.entries(personagem)
var r2 = Object.assign(personagem, {esquiva:2})
var r3 = Object.freeze(personagem)
//var r4 = Object.personagem(velocidade)
var r5 = Object.keys(personagem)

console.log(r1)
console.log(r2)
console.log(r3)
// console.log(r4)
console.log(r5)

const filmes = ['Meia-noite em Paris', 'Machete', 'Taxi Driver', 'Matrix']


//for(let filme of filmes)
