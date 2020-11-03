// escopo global, não fica dentro de nenhum bloco {} ou função!

// escopo global
var exemploVariavelGlobal = 'Eduardo !';


// escopo de bloco, dentro de chaves { }
var testeLogico = true
if (true) {
    console.log('Verdadeiro ' + exemploVariavelGlobal);
    
} else {
    console.log('Falso')
}

// escopo de uma função
var mensagem = ''
function test(mensagem) {
    return 'Isso é uma função ' + exemploVariavelGlobal;
    
}
console.log(test(mensagem))