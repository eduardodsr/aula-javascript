function init() {
    const exemplo = 'Essa variavel';
    
    return function() {
        console.log(`1 - O valor da variavel exemplo é: ${exemplo}.`);
        
        return function() {
            console.log(`2 - O valor da variavel exemplo é: ${exemplo}.`);

            return function() {
                console.log(`3 - O valor da variavel exemplo é: ${exemplo}.`);
            }
        }
    }
}

/* 
// closure - tenho uma função retornando uma ou mais funções, dentro do próprio bloco da função.
const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();

*/

// não usar isso na prática, é somente um exemplo
init()()()(); // chamando direto as 4 funções, numa mesma linha de comando


/* 

(() => {
    const exemplo = "Essa variável";
  
    const funcao1 = () => {
      console.log(`Será lembrada aqui: ${exemplo}`);
  
      return () => {
        console.log(`Aqui também: ${exemplo}`);
  
        return () => {
          console.log(`Acredito que já entendemos o que é Closure: ${exemplo}`);
        };
      };
    };
  
    funcao1()()();
  })();
  
*/