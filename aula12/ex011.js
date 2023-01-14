var idade = 22
console.log(`Voce tem ${idade} anos`)
if (idade < 18) {
    console.log(`Vota`)
} else if (idade <= 18 || idade > 65) {
    console.log(`Voto Opcional`)
} else {
    console.log(`Voto obrigatorio`)
}