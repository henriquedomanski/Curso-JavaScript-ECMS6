// 1.Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
//ordem: multip/div/soma = 5*2=10 | 10/2=5| 5+20=25 | 25+10=35


// 2.Crie duas expressões que retornem NaN
var soma = 'teste' + 2//na soma ele concatena com a string
var soma2 = 'teste' /2 //na divisão e outras operaçoes ele retornar NaN
console.log(soma, soma2)
// 3.Somar a string '200' com o número 50 e retornar 250

var soma3 = Number('200') + 50//tbm funciona assim: var soma3 = +'200' + 50
console.log(soma3)

// 4.Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(`O valor antes do incremento da variavel'X' é: ${x} `)
x++
console.log(`O valor atual da variavel'X' é: ${x} `)

// 5.Como dividir o peso por 2?
var numero = +'80' /2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'


console.log(`O peso dividido por dois é:${peso}`)
