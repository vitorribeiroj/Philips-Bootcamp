let a = Number(prompt('Entre com o primeiro número: '))
let b = Number(prompt('Entre com o segundo número: '))
let c
let soma = a + b
let d 
let e 


if (a == b) {
    c = 'são'
}
else {
    c = 'não são'
}

if (soma > 10){
    d = 'maior'
}
else{
    d = 'menor'
}

if (soma > 20){
    e = 'maior'
}
else{
    e = 'menor'
}

console.log(`Os números ${a} e ${b} ${c} iguais. Sua soma é ${soma}, que é ${d} que 10 e ${e} que 20.`)
alert(`Os números ${a} e ${b} ${c} iguais. Sua soma é ${soma}, que é ${d} que 10 e ${e} que 20.`)