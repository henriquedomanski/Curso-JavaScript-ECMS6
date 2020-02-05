// Liste 5 objetos nativos
  //resposta: Array, Function, Object, String, Number


// Liste 5 objetos do browser
   //respostas: window, document, history, HTMLCollention, NodeList


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
    
if (typeof document.webkitVisibilityState !== "undefined"){
  console.log('existe')
} else {
  console.log ('nao existe')
}