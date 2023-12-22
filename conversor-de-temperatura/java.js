function subtrair() {
    var f = window.document.getElementById('txt1')
    var r = window.document.getElementById('resp')

    var n1 = Number(f.value)

    var c = (n1-32) / 1.8 

    r.innerHTML = `a temperatura em graus celsius é de ${c}`

}