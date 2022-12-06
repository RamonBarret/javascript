function verificar () {
    
    var idade = document.getElementById('txtidade')
    var res = document.querySelector('div#res')

    if (idade.value.length == 0 || idade > 20) {
        //Bom dia!
      window.alert('[ERRO] - Verifique os dados e tente novamente!')
    }
    else {
        var idadef = Number(idade.value) * 7
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


            if (idadef >= 0 && idadef < 10) {
                //Filhote
                img.setAttribute('src', 'imagens/dog_filhotep.jpg')
            } else if (idadef < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/dog_jovemp.jpg')
            } else if (idadef < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/dog_adultop.jpg')
            } else if (idadef > 50) {
                //Sênior
                img.setAttribute('src', 'imagens/dog_idosop.jpg')
                //'imagens/dog_vovop.jpg'
            }
       
        }
        
        res.innerHTML = `O seu Pet tem na idade de um Ser Humano: <strong>${idadef} anos.</strong> `
        res.appendChild(img)
    }