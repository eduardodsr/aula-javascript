//  Arrow Funcions =>  ( ) => { }
(() => {
  
  const user = {
    name: "Eduardo",
    lastName: "Rodrigues"
  };

  // funcao que retorna o Nome e Sobrenome (do objeto User)
  function getUserWithFullName(user) {
    return {
      /* Spread Operator - Adicionar propriedades ou elementos aos arrays e objetos, basta adicionar ...ObjetoAnterior (...user) */
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);

  // console.log(userWithFullName)
  console.log(userWithFullName, user) // mostra que não alterou a referencia do objeto

})();


