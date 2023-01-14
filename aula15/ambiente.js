let num = [5, 8, 2, 9, 3]

num.sort()
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log(`O valo não foi encontrado`)
} else {
    console.log(`O valor 8 esta na posição ${pos}`)
}