// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa (nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + this.sobrenome
}
const henrique = new Pessoa ('Henrique', 'Domanski', 28)



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
    //Resposta: no console digitar: Nodelist.Prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

//Resposta: usar .constructor no console para mostrar o construtor ex: li.construtor

li;//HTMLLIElement
li.click;// function
li.innerText;//String
li.value; // Number
li.hidden;//  boolean
li.offsetLeft;// Number
li.click();//undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
