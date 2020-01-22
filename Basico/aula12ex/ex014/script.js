
function carregar (){
var msg = window.document.getElementById ('msg')
var img = window.document.getElementById ('imagem')
var data = new Date ()
var hora = data.getHours ()

msg.innerHTML = (`Agora são ${hora} horas`)
if (hora >= 0 && hora < 12){
    //BOM DIA!
    img.src = 'manhaedt.png'
    document.body.style.background = '#FDF7C7'

} else if(hora >= 12 && hora <= 18) {

    // BOA TARDE
    img.src = 'tardeedt-1.png'
    document.body.style.background = '#FB7D01'

}else {
    // BOA NOITE!
    img.src = 'noiteedt.png'
    document.body.style.background = '#212F3C'
}

}