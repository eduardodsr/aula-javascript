let user = {
  name: "Eduardo"
};

/* 
console.log(user)
console.log("Nome:", user.name)
*/

// Alterando a propriedade de um objeto
console.log(user)

user.name = "Outro nome 1";
console.log(user)
user["name"] = "Outro nome 2";

console.log(user)
const prop = "name";
user[prop] = "Outro nome 3";

console.log(user)

/* 
function getProp(prop) {
     return user[prop];
}
*/

// Criando uma propriedade
user.lastName = "da Silva Rodrigues";

console.log(user)

// Deletando uma propriedade
delete user.name; // deletou name="Eduardo"

console.log(user)
