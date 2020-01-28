// Adicione a classe ativo a todos os itens do menu
const classeAtivo = document.querySelectorAll('.menu a')


classeAtivo.forEach((item) => {
    item.classList.add('ativo')

})



// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
classeAtivo.forEach((item) => {
    item.classList.remove('ativo')

})

classeAtivo[0].classList.add('ativo')

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach((img) =>{
    const possuiAtributo = img.hasAttribute ('alt')
    console.log(img, possuiAtributo)

})


//https://
// Modifique o href do link externo no menu

const link = document.querySelector ('a[href^="https"]')

link.setAttribute ('href' , 'https://www.google.com.br')

console.log(link)

