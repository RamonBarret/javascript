function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = "imagens/diapeq.jpg"
        document.body.style.background = "#45C4B0"
    }
    else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = "imagens/tardepeq.png"
        document.body.style.background = "#F0A065"
    }
    else {
        //Boa noite!
        img.src = "imagens/noitepeq.jpg"
        document.body.style.background = "#4F5B55"
    }
}