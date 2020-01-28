// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var euIdade = 24
var paiIdade = 46
var maeIdade = 43

if (euIdade > maeIdade) {
    console.log('Sua idade é maior')

} else if (euIdade === maeIdade) {
    console.log('Sua idade igual: ')
} else {
    console.log('Sua idade é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)//verdadeiro

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log (!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)// !!verifica se é true ou false


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil === china){
    console.log('Tem o mesmo numero de habitantes')

} else if (brasil > china){
    console.log ('Brasil maior numero de habitantes')
} else {
    console.log('Brasil tem menos habitantes')
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}