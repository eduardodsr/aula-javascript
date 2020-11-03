(() => {
  const getName = () => {
    return "Eduardo da Silva Rodrigues";
  };

  const log = value => {
    console.log(value);
  };

  const main = fn => {
    return () => log(fn());
  };

  const logName = main(getName);

  logName();
})();
