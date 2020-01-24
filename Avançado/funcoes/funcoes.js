// Crie uma função para verificar se um valor é Truthy

    function verificaVerdadeiro (valor){
        return !!valor
}

var oi = verificaVerdadeiro(0)
console.log(oi)

// fim


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado (lado){
    return lado * 4;
}
console.log(perimetroQuadrado(4))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `Seu nome completo é: ${nome} ${sobrenome}`
}
console.log (nomeCompleto('Henrique', 'Domanski'))

// Crie uma função que verifica se um número é par
function verificaPar (par){
    var modulo = par % 2
    if (modulo === 0){
        return console.log('Não é par')
    } else{
        return console.log('é par')
    }
}

console.log (verificaPar(2))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado (tipo){
    return typeof tipo
}

console.log(tipoDado('Txt')) 

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
    addEventListener ('scroll', function(){
        console.log ('Henrique Domanski')
    } )


// // Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//     var totalPaises = 193;
//     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
//   }
//   function jaVisitei(paisesVisitados) {
//     return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
//   }
//   console.log(precisoVisitar(20))
//   console.log(jaVisitei(20))


// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
   
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  
precisoVisitar(20)  



