function tabuada() {
    let numero = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(numero.value.length <= 0) {
        alert('Numero invalido!')
    } else {
        tab.innerHTML = ' '
        num = Number(numero.value)
        for (let i = 0; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${num} * ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}