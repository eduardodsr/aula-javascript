(() => {
  this.name = "arrow function"; 
  
  const getNameArrowFn = () => this.name;

  function getName() {
    return this.name;
  }

  // user.getName()
  const user = {
    name: "Nome no objeto de execução",
    getNameArrowFn, // getNameArrowFn: getNameArrowFn,
    getName // getName: getName
  };

  console.log(user.getNameArrowFn()); // "arrow function"
  // getNameArrowFn = () => this.name

  console.log(user.getName()); // "Nome no objeto de execução"
})();
