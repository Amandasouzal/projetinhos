function dividir() {
    var peso = window.document.getElementById('txt1')
    var altura = window.document.getElementById('txt2')
    var r = window.document.getElementById('res')
    var n1 = Number(peso.value)
    var n2 = Number(altura.value)
    var imc = (n1 / n2**2).toFixed(1) 
    
        
     if(imc < 17) {
        r.innerHTML = `Seu Imc é de ${imc}. Muito abaixo do peso.`
    } else if (imc >= 17 && imc < 18.5) {
        r.innerHTML = `Seu Imc é de ${imc}. Abaixo do peso`
    } if (imc >= 18.5 && imc <= 25) {
        r.innerHTML = `Seu Imc é de ${imc}. Peso ideal `
    }  else if (imc > 25 && imc <= 30) {
        r.innerHTML = `Seu Imc é de ${imc}. Sobrepeso`
    } else if (imc > 30 && imc <= 35) {
        r.innerHTML = `Seu Imc é de ${imc}. Obesidade`
    } else if (imc > 35 && imc < 40) {
        r.innerHTML = `Seu Imc é de ${imc}. Obesidade severa`
    } else if (imc >= 40 ){
        r.innerHTML = `Seu Imc é de ${imc}. Obesidade mórbida`
    }
 

 }
