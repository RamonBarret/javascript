var idade = 15
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Ainda não pode votar.')
} else if (idade < 18 || idade > 65) {
    console.log('Seu voto é opicional.')
}  else {
    console.log('Seu voto é obrigatório.')
}