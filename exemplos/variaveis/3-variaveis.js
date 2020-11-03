const name = "Eduardo";

// Não podemos alterar o valor
// name = "Eduardo";

const user = {
  name: "Eduardo"
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = "Outro nome";

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//  name: "Eduardo"
//};

const persons = ["Eduardo", "Pedro", "Jennifer"];

console.log("\nArray antes das alterações: ", persons);

// Podemos adicionar novos itens
persons.push("João"); // adicionou no ultimo elemento do array

// Podemos remover algum item
var removeuPrimeiroElementoArray = persons.shift(); // Eduardo
console.log(removeuPrimeiroElementoArray)

// Podemos alterar diretamente
persons[1] = "James"; // alterou o segundo elemento do array, de "Jeniffer" para "James"

console.log("\nArray após as alterações: ", persons);

// Array após as alterações:  [ 'Pedro', 'James', 'João' ]