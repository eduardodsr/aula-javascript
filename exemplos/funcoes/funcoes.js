// Funções de primeira classe e ordem maior

function getName() {
    return 'Eduardo da Silva Rodrigues';
}

function logFn(fn) {
    return console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
