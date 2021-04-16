function carregar(){
    var msg = document.getElementById('msg')
    var msg1 = document.getElementById('msg1')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:00 horas`
    if(hora >= 0 && hora < 12){
        img.src = 'image/manha.png'
        document.body.style.background ='#e2cd9f'
        msg1.innerHTML = ('Bom Dia!')
    }else if(hora >= 12 && hora < 18){
        img.src = 'image/tarde.png'
        document.body.style.background ='#c6600e'
        msg1.innerHTML = ('Boa Tarde!')
    }else{
        img.src = 'image/noite.png'
        document.body.style.background ='#05162f'
        msg1.innerHTML = ('Boa Noite!')
    }
}
