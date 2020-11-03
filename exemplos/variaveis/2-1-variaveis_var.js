var test = "exampleGlobal";

// Arroy Function =  ( () => { } )
(() => {
  console.log(`Valor dentro da função "${test}"`);
  // test não foi declarado e retorna "undefined"

  if (true) {
    var test = "exampleIf";
    console.log(`Valor dentro do if "${test}"`);
    // teste foi declarado, retorna o Valor dentro do if "example"
  }

  console.log(`Valor após a execução do if "${test}"`);
  // Valor após a execução do if "example"
})();
