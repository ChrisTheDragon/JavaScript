let num = document.getElementById('numtxt')
let lista = document.getElementById('seltab')
let res = document.getElementById('res')
var vetor = []

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function isNumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    if (vetor.length ==0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let soma = 0
        let media = 0
        for(let pos in vetor) {
            soma += vetor[pos]
        }
        media = soma/vetor.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, vetor)}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, vetor)}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}