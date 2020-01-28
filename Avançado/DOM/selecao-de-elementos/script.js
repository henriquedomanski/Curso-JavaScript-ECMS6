// Retorne no console todas as imagens do site

const retornaImg = document.querySelectorAll ('img')

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll ('img[src^="img/imagem"]')

// Selecione todos os links internos (onde o href começa com #)
const selecionaHref = document.querySelectorAll ('[href^="#"]')

// Selecione o primeiro h2 dentro de .animais-descricao
const selecionaH2 = document.querySelector ('h2')

// Selecione o último p do site

const paragrafos = document.querySelectorAll ('p')
console.log(paragrafos [--paragrafos.length])

