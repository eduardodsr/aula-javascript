const user = {
  name: "Eduardo",
  lastName: "Rodrigues"
};

// Recupera as chaves do objeto
console.log("Propriedades do objeto user:", Object.keys(user));

// Retorna um array de arrays contendo [ nome_propriedade, valor_propriedade ]
console.log("\nLista de propriedades e valores:", Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, { fullName: "Eduardo da Silva Rodrigues" });

console.log("\nAdiciona a propriedade fullName no objeto user", user);
console.log(
  "\nRetorna um novo objeto mergeando dois ou mais objetos",
  Object.assign({}, user, { age: 26 })
);

// Previne todas as alterações em um objeto
const newObj = { foo: "bar" };
Object.freeze(newObj); // freeze(congela) e não consegue alterar e remover as propriedades em um objeto

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVariável new Obj após as alterações:", newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: "Eduardo" };
Object.seal(person);


person.name = "Eduardo Rodrigues";
delete person.name;
person.age = 26;


console.log("\nVariável person após as alterações:", person);
