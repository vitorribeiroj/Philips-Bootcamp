function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

let vitor = {nome: 'Vitor', idade: 32}
let flavio = {nome: 'Flávio', idade: 29}
let mariana = {nome: 'Mariana', idade: 29}
let sara = {nome: 'Sara', idade: 1}
let wania = {nome: 'Wânia', idade: 66}

let pessoas = [vitor,flavio,mariana,sara,wania]

console.log('----- Utilizando CALL -----\n')

for(pessoa of pessoas){
    console.log(calculaIdade.call(pessoa,17))
}

/* Obrigatoriamente, no APPLY, o parâmetro deve ser passado como lista */
console.log('\n----- Utilizando APPLY -----\n')
for(pessoa of pessoas){
    console.log(calculaIdade.apply(pessoa,[17]))
}

