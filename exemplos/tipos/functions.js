function fn() {
  return "Code here";
}

// Arrow Function, sua estrutura (nova forma declarar uma função)
// () => {}

const arrowFn = () => "Code here"; 
// uma única expressão - não precisa de return, Arrow Functions

const arrowFn2 = () => {
  // Mais de uma expressão - precisa de return, Arrow Functions
  return "Code here";
};

// Funções também são objetos
fn.prop = "Posso criar propriedades";

console.log(fn());
console.log(fn.prop); 

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
  if (allowed) {
    fnParam();
  }
};

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

/**
// controlFnExec como função normal sem utilizar Arrow Functions

function controlFnExec(fnParam) {
  return function(allowed) {
    if (allowed) {
      fnParam();
    }
  };
}
 */
